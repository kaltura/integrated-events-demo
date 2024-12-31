// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { KalturaUser } from "kaltura-node-typescript-client/api/types/KalturaUser";
import { UserAddAction } from "kaltura-node-typescript-client/api/types/UserAddAction";
import { UserGetAction } from "kaltura-node-typescript-client/api/types/UserGetAction";
import { KalturaGroupUserFilter } from "kaltura-node-typescript-client/api/types/KalturaGroupUserFilter";
import { KalturaGroupUserStatus } from "kaltura-node-typescript-client/api/types/KalturaGroupUserStatus";
import { KalturaFilterPager } from "kaltura-node-typescript-client/api/types/KalturaFilterPager";
import { GroupUserListAction } from "kaltura-node-typescript-client/api/types/GroupUserListAction";
import { GroupUserAddAction } from "kaltura-node-typescript-client/api/types/GroupUserAddAction";
import { GroupUserDeleteAction } from "kaltura-node-typescript-client/api/types/GroupUserDeleteAction";
import { KalturaClientWrapper, UserKSContext } from "./kaltura-client-wrapper";
import { PrivilegeType } from "./ks-utils/privilege-type";
import { CacheContainer } from 'node-ts-cache'
import { MemoryStorage } from 'node-ts-cache-storage-memory'
import { XhrLogMessage, xhrLogMessages } from "../xhrLogMessages";
import { KalturaGroupUser } from "kaltura-node-typescript-client/api/types/KalturaGroupUser";
import { KalturaRequest } from "kaltura-node-typescript-client/api/kaltura-request";
import config from "../config";
import { start } from "repl";

const modelCache = new CacheContainer(new MemoryStorage());
const USER_OBJECT_CACHE_TTL = 2592000; // 30 days cache
const USER_ENTRY_MODERATOR_CACHE_TTL = 259200; // 3 days cache
const PLAYER_KS_EXPIRY = 259200; // 3 days

export class KalturaUserModel {
    public user: KalturaUser;
    public isModerator: boolean = false;
    public userKs: string;

    private setAsModerator: boolean = false;
    private groupId: string = '';
    private eventId: string = '';
    private useGroupsForModerators = config.get("useGroupsForModerators");
    private userShouldBeAddedToGroup: boolean = false;
    private adminClient = KalturaClientWrapper.getAdminClient();
    private skipGroupModerationCheck = false;
    private moderatorCacheObjectId;

    constructor(user: KalturaUser, groupId?: string, eventId?: string, setAsModerator?: boolean) {
        this.user = user;
        if (setAsModerator) {
            this.setAsModerator = setAsModerator;
        }
        if (groupId) {
            this.groupId = groupId;
        }
        if (eventId) {
            this.eventId = eventId;
        }
        if (this.useGroupsForModerators) {
            // if not relying on Kaltura groups - set to false
            this.userShouldBeAddedToGroup = true;
        }
        // this.moderatorCacheObjectId = "isModerator_"+this.user.id+"_"+this.groupId+"_"+(this.setAsModerator === true? 'setAsModerator': 'notModerator');
        this.moderatorCacheObjectId = "isModerator_" + this.user.id + "_" + this.groupId;
    }

    public async getUserData() {
        if (!(await this.get())) {
            // user does not exist - create it
            await this.create();
        }

        if (!this.skipGroupModerationCheck && this.useGroupsForModerators) {
            // using Kaltura groups for moderators and current user is not yet verified to be in the group
            // (in other words - not added during create and we didn't list group.user)
            if (this.setAsModerator) {
                this.isModerator = await this.checkIfModerator();
            }
        } else if (!this.useGroupsForModerators) {
            this.isModerator = this.setAsModerator;
        }
        
        const privileges = {};
        privileges[PrivilegeType.DisableEntitlement] = '';
        privileges[PrivilegeType.VirtualEventId] = this.eventId;

        const userClient = KalturaClientWrapper.getUserClient(this.user.id, UserKSContext.player, privileges, PLAYER_KS_EXPIRY);
        this.userKs = userClient.getDefaultRequestOptions()['ks'];
        return true;
    }

    private async get() {
        const cachedUser = await modelCache.getItem<KalturaUser>("user_" + this.user.id);
        if (cachedUser) {
            xhrLogMessages.addMessage(new XhrLogMessage('user', {isCached: true}));
            console.log("returning user from cache for id "+this.user.id);
            this.user = cachedUser;
            return true;
        }
        try {
            const startTime = Date.now();
            const result = await this.adminClient.request(new UserGetAction({ userId: this.user.id }));
            const timing = Date.now()-startTime;
            await modelCache.setItem("user_" + this.user.id, result, { ttl: USER_OBJECT_CACHE_TTL })
            xhrLogMessages.addMessage(new XhrLogMessage('user', {isFetched: true, timing}));
            if (result) {
                // if user returned - result is not null
                this.user = result;
            }
            return true;
        } catch (e) {
            return false;
        }
    }

    private async create() {
        try {
            const xhrLogMessageUser = new XhrLogMessage('user', {isCreated: true});
            // let xhrLogMessage = 'created';
            const requests: KalturaRequest<any>[] = [
                new UserAddAction({ user: this.user })
            ];

            if (this.userShouldBeAddedToGroup && this.setAsModerator) {
                xhrLogMessageUser.msg = "added user and user to group";
                // creating groupUser object to make user a moderator
                requests.push(this.getGroupUserAddRequest());
                // setting skipGroupModerationCheck because we've just added the user to Kaltura and to the group
                this.skipGroupModerationCheck = true;
                this.isModerator = true;
            }
            const startTime = Date.now();
            const responses = await this.adminClient.multiRequest(requests);
            const total = Date.now() - startTime;
            xhrLogMessageUser.timing = total;
            xhrLogMessages.addMessage(xhrLogMessageUser);
            console.log("Kaltura request for user add took " + total + "ms");
            if (responses) {
                await modelCache.setItem("user_" + this.user.id, responses[0].result, { ttl: USER_OBJECT_CACHE_TTL });
                if (this.userShouldBeAddedToGroup) {
                    await modelCache.setItem(this.moderatorCacheObjectId, { result: true }, { ttl: USER_ENTRY_MODERATOR_CACHE_TTL });
                }
                return true;
            }
        } catch (e) {
            console.log("failed creating user", e);
        }
    }

    private getGroupUserAddRequest() {
        const groupUser = new KalturaGroupUser();
        groupUser.userId = this.user.id;
        groupUser.groupId = this.groupId;
        return new GroupUserAddAction({ groupUser });
    }

    private async checkIfModerator() {
        let returnValue: boolean | null = null;
        // check in cache first
        const cachedIsModerator = await modelCache.getItem<Object>(this.moderatorCacheObjectId);
        if (cachedIsModerator && cachedIsModerator.hasOwnProperty('result')) {
            xhrLogMessages.addMessage(new XhrLogMessage('userGroups', {isCached: true}));
            returnValue = cachedIsModerator['result'];
        }

        if (returnValue === null) {
            // if we got here - groupUser is not cached - list and decide by that
            // create groupUser filter to list the group for the user
            let filter = new KalturaGroupUserFilter();
            filter.userIdIn = this.user.id;
            filter.groupIdEqual = this.groupId;
            filter.statusEqual = KalturaGroupUserStatus.active;
            const pager = new KalturaFilterPager();

            const startTime = Date.now();
            const result = await this.adminClient.request(new GroupUserListAction({ filter, pager }));
            const timing = Date.now() - startTime;
            xhrLogMessages.addMessage(new XhrLogMessage('userGroups', {isFetched: true, timing}));
            if (result !== null && result.totalCount > 0) {
                returnValue = true;
            } else {
                returnValue = false;
            }
        }

        if (returnValue === false && this.setAsModerator === true) {
            // user requested to be a moderator but is not - let's add
            return await this.addUserToGroup();
        } else if (returnValue === true && this.setAsModerator === false) {
            // user not requested to be set as moderaor but it is according to cache
            return await this.removeUserFromGroup();
        } else {
            // value matches expected - just cache if needed and return
            if (!cachedIsModerator) {
                await modelCache.setItem(this.moderatorCacheObjectId, { result: returnValue }, { ttl: USER_ENTRY_MODERATOR_CACHE_TTL });
            }
            return returnValue;
        }
    }

    private async addUserToGroup() {
        const request = this.getGroupUserAddRequest();
        try {
            const startTime = Date.now();
            const userGroup = await this.adminClient.request(request);
            const timing = Date.now()-startTime;
            xhrLogMessages.addMessage(new XhrLogMessage('groupUser', {isCreated: true, timing}));
            await modelCache.setItem(this.moderatorCacheObjectId, { result: true }, { ttl: USER_ENTRY_MODERATOR_CACHE_TTL });
            return true;
        } catch (e) {
            console.log("failed adding user to group");
            throw e;
        }
    }
    private async removeUserFromGroup() {
        const request = new GroupUserDeleteAction({
            userId: this.user.id,
            groupId: this.groupId,
        });
        try {
            const startTime = Date.now();
            const userGroup = await this.adminClient.request(request);
            const timing = Date.now()-startTime;
            xhrLogMessages.addMessage(new XhrLogMessage('groupUser', {isCreated: true, timing}));
            await modelCache.setItem(this.moderatorCacheObjectId, { result: false }, { ttl: USER_ENTRY_MODERATOR_CACHE_TTL });
            return false;
        } catch (e) {
            console.log("failed removing user from group");
            throw e;
        }
    }
}

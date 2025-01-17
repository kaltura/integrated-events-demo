import { KalturaGroup } from "kaltura-node-typescript-client/api/types/KalturaGroup";
import { GroupAddAction } from "kaltura-node-typescript-client/api/types/GroupAddAction";
import { KalturaGroupFilter } from "kaltura-node-typescript-client/api/types/KalturaGroupFilter";
import { GroupListAction } from "kaltura-node-typescript-client/api/types/GroupListAction";
import { KalturaClientWrapper } from "./kaltura-client-wrapper";
import { XhrLogMessage, xhrLogMessages } from "../xhrLogMessages";
import { KalturaFilterPager } from "kaltura-node-typescript-client/api/types/KalturaFilterPager";
import { CacheContainer } from 'node-ts-cache'
import { MemoryStorage } from 'node-ts-cache-storage-memory'
const modelCache = new CacheContainer(new MemoryStorage());

const GROUP_OBJECT_CACHE_TTL = 2592000; // 30 days cache

/**
 * translate an entry ID to moderators group ID
 * @param {string} entryId 
 * @returns 
 */
export function getModeratorsGroupId(entryId: string) {
    return `${entryId}_moderators`;
}

export async function validateGroupExists(groupId: string) {
    const client = KalturaClientWrapper.getAdminClient();
    const cachedGroupExists = await modelCache.getItem<boolean>(groupId);
    if (cachedGroupExists) {
        xhrLogMessages.addMessage(new XhrLogMessage('group', {isCached: true}));
        return cachedGroupExists;
    }

    const pager = new KalturaFilterPager();
    const filter = new KalturaGroupFilter();
    filter.idEqual = groupId;
    try {
        const startTime = Date.now();
        const groups = await client.request(new GroupListAction({ filter, pager }));
        let timing = Date.now()-startTime;
        if (groups?.totalCount === 1) {
            // cache
            xhrLogMessages.addMessage(new XhrLogMessage('group', {isFetched: true, timing}));
            await modelCache.setItem(groupId, true, { ttl: GROUP_OBJECT_CACHE_TTL })
            return true;
        } else {
            const group = new KalturaGroup();
            group.id = groupId;
            try {
                const result = client.request(new GroupAddAction({ group }));
                timing = Date.now()-startTime;
                xhrLogMessages.addMessage(new XhrLogMessage('group', {isCreated: true, timing}));
                await modelCache.setItem(groupId, true, { ttl: GROUP_OBJECT_CACHE_TTL })
                return true;
            } catch (e) {
                console.log(`failed to create group ${groupId}`);
                console.log(e);
                throw e;
            }
        }
    } catch (e) {
        console.log(`could not list for group ${groupId}`);
        console.log(e);
        throw e;
    }
}
import config from "../config";
import { UserModel } from "../models/user.model";
import { KalturaUserModel } from "../kaltura-integration/kaltura-user.model";
import { KalturaUser } from "kaltura-node-typescript-client/api/types/KalturaUser";
import { getModeratorsGroupId, validateGroupExists } from "../kaltura-integration/group.model";
import { cncModel } from "../kaltura-integration/cnc.model";
import { entryModel } from "../kaltura-integration/entry.model";
import { KalturaMeetingExperienceModel } from "../kaltura-integration/kme.model";
import { xhrLogMessages } from "../xhrLogMessages";
import { KalturaClientWrapper } from "../kaltura-integration/kaltura-client-wrapper";
import { KalturaEventModel } from "../kaltura-integration/kaltura-event.model";

export class KalturaService {

    // this action assumes it is alway called with an existing user in the local application
    static async getUserData(ctx: any) {
        xhrLogMessages.clearMessages();

        const userId = ctx.request.body.userId;
        const eventId = ctx.request.body.eventId;
        const entryId = ctx.request.body.entryId;
        const setAsModerator = ctx.request.body.setAsModerator;
        const groupId = getModeratorsGroupId(entryId);
        const user = await new UserModel().get(userId);
        if (!user) {
            // user does not exist in DB - not returning KS
            ctx.status = 200;
            ctx.body = { result: false, msg: 'user does not exist' };
            return;
        }
        
        const useGroupsForModerators = config.get("useGroupsForModerators");

        // verify group exists - if exists, will be cached and no impact on this call performance.
        // if not cached - impact on this call performance is only once for all users (i.e. impact on first user only).
        if (useGroupsForModerators && groupId !== '') {
            await validateGroupExists(groupId);
        }

        
        const kalturaUserModel = new KalturaUserModel(new KalturaUser(user), groupId, eventId, setAsModerator);
        // the following will create the user in Kaltura if needed, and will set as moderator if needed.
        // if user exists and already in the desired moderator mode (per the relevant enry and event) - will return from cache
        try {
            await kalturaUserModel.getUserData();
        } catch (e) {
            // something went wrong - log and rethrow error
            console.log("something went wrong getting/creating user");
            throw e;
        }

        const jwt = await new cncModel().getCncJwt(kalturaUserModel.user.id, entryId, kalturaUserModel.isModerator, eventId);

        // the following gets the entry object
        const entry = await entryModel.getEntry(entryId);
        console.log(entry);
        // get room launch in case entry is a room and user should launch it
        const kmeRoomLti = await KalturaMeetingExperienceModel.getKme(entry, kalturaUserModel);

        ctx.status = 200;
        ctx.body = {
            ks: kalturaUserModel.userKs,
            jwt,
            entry,
            kmeRoomLti
        }
        
        ctx.set('x-xhr-messages', xhrLogMessages.getMessagesAsHeaderString());
    }

    static async getLibs(ctx: any) {
        xhrLogMessages.clearMessages();

        const { id: partnerId } = config.get("partner");
        const uiconfid = config.get("uiConfid");
        const cncPlayerID = config.get("cncPlayerID");
        const reactionUiConfid = config.get("reactionUiConfid");

        ctx.status = 200;
        ctx.body = { partnerId, uiconfid, cncPlayerID, reactionUiConfid}; //needed for Player and CnC Libraries
        ctx.set('x-xhr-messages', xhrLogMessages.getMessagesAsHeaderString());
    }



    static async addVirtualEvent(ctx: any) {
        xhrLogMessages.clearMessages();
       
        try {
            const { eventName, eventDescription } = ctx.request.body;
            
            if (!eventName) {
                ctx.status = 400;
                ctx.body = { success: false, message: "Event name is required" };
                return;
            }

            const kalturaEventModel = new KalturaEventModel();
            const createdEvent = await kalturaEventModel.createEvent(eventName, eventDescription);

            ctx.status = 200;
            ctx.body = {
                success: true,
                event: createdEvent
            };
        } catch (error) {
            console.error('Error creating virtual event:', error);
            ctx.status = 500;
            ctx.body = {
                success: false,
                message: error.message || 'Failed to create virtual event'
            };
        }
        
        ctx.set('x-xhr-messages', xhrLogMessages.getMessagesAsHeaderString());
    }

    static async listEvents(ctx: any) {
        xhrLogMessages.clearMessages();
        
        try {

            const kalturaEventModel = new KalturaEventModel();
            const createdEvent = await kalturaEventModel.listEvents();

            ctx.status = 200;
            ctx.body = {
                success: true,
                event: createdEvent
            };
        } catch (error) {
            console.error('Error creating virtual event:', error);
            ctx.status = 500;
            ctx.body = {
                success: false,
                message: error.message || 'Failed to create virtual event'
            };
        }
        
        ctx.set('x-xhr-messages', xhrLogMessages.getMessagesAsHeaderString());
    }

    /**
 * Get sessions list details by ID
 * query params:
 *   eventId
 */
    static async getSessions(ctx: any) {
        const kalturaEventModel = new KalturaEventModel(); // Create an instance of KalturaEventModel
        try {

            const {eventId } = ctx.request.body;
            if (!eventId) {
                ctx.status = 400;
                ctx.body = { success: false, message: "Event id is required" };
                return;
            }
            const event = await kalturaEventModel.getSessions(eventId); // Call the method from KalturaEventModel
            ctx.body = event; // Set the response body
        } catch (error) {
            ctx.status = 500; // Set the response status to 500 on error
            ctx.body = { error: error.message }; // Return the error message
        }
    }

    static async getSessionDetails(ctx: any) {
        
        try {

            const {entryId } = ctx.request.body;
            if (!entryId) {
                ctx.status = 400;
                ctx.body = { success: false, message: "Event id is required" };
                return;
            }
            const event = await KalturaEventModel.getSession(entryId); // Call the method from KalturaEventModel
            ctx.body = event; // Set the response body
        } catch (error) {
            ctx.status = 500; // Set the response status to 500 on error
            ctx.body = { error: error.message }; // Return the error message
        }
    }

    static async addLiveSession(ctx: any) {
        xhrLogMessages.clearMessages();
       
        try {
            const { sessionName, sessionDescription, sessionEventId} = ctx.request.body;
            
            if (!sessionName || !sessionDescription || !sessionEventId) {
                ctx.status = 400;
                ctx.body = { success: false, message: "Missing param" };
                return;
            }

            const kalturaEventModel = new KalturaEventModel();
            const createdEvent = await kalturaEventModel.createLiveEntry(sessionName, sessionDescription,sessionEventId);

            ctx.status = 200;
            ctx.body = {
                success: true,
                event: createdEvent
            };
        } catch (error) {
            console.error('Error creating Live session', error);
            ctx.status = 500;
            ctx.body = {
                success: false,
                message: error.message || 'Failed to create  Live session'
            };
        }
        
        ctx.set('x-xhr-messages', xhrLogMessages.getMessagesAsHeaderString());
    }

    static async addRoomSession(ctx: any) {
        xhrLogMessages.clearMessages();
       
        try {

           
            const { roomName, roomDesc, eventRoomId,liveEntryIdInput} = ctx.request.body;
            
            if (!roomName || !roomDesc ) {
                ctx.status = 400;
                ctx.body = { success: false, message: "Missing param" };
                return;
            }

            const kalturaEventModel = new KalturaEventModel();
            const createdEvent = await kalturaEventModel.createRoomEntry(roomName, roomDesc,liveEntryIdInput,eventRoomId);

            ctx.status = 200;
            ctx.body = {
                success: true,
                event: createdEvent
            };
        } catch (error) {
            console.error('Error creating Live session', error);
            ctx.status = 500;
            ctx.body = {
                success: false,
                message: error.message || 'Failed to create  Live session'
            };
        }
        
        ctx.set('x-xhr-messages', xhrLogMessages.getMessagesAsHeaderString());
    }




}
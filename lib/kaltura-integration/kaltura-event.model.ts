import { KalturaClientWrapper } from "./kaltura-client-wrapper";
import config from "../config";
import { KalturaVirtualEvent } from "kaltura-node-typescript-client/api/types/KalturaVirtualEvent";
import { VirtualEventAddAction } from "kaltura-node-typescript-client/api/types/VirtualEventAddAction";
import { VirtualEventListAction } from "kaltura-node-typescript-client/api/types/VirtualEventListAction";
import { KalturaESearchEntryParams } from "kaltura-node-typescript-client/api/types/KalturaESearchEntryParams";
import { KalturaESearchEntryOperator } from "kaltura-node-typescript-client/api/types/KalturaESearchEntryOperator";
import { KalturaESearchEntryMetadataItem } from "kaltura-node-typescript-client/api/types/KalturaESearchEntryMetadataItem";
import { KalturaESearchItemType } from "kaltura-node-typescript-client/api/types/KalturaESearchItemType";
import { KalturaPager } from "kaltura-node-typescript-client/api/types/KalturaPager";
import { ESearchSearchEntryAction } from "kaltura-node-typescript-client/api/types/ESearchSearchEntryAction";
import { BaseEntryGetAction } from "kaltura-node-typescript-client/api/types/BaseEntryGetAction";
import { KalturaESearchOperatorType } from "kaltura-node-typescript-client/api/types/KalturaESearchOperatorType";
import { KalturaLiveStreamAdminEntry } from "kaltura-node-typescript-client/api/types/KalturaLiveStreamAdminEntry";
import { KalturaSourceType } from "kaltura-node-typescript-client/api/types/KalturaSourceType";
import { KalturaMediaType } from "kaltura-node-typescript-client/api/types/KalturaMediaType";
import { LiveStreamAddAction } from "kaltura-node-typescript-client/api/types/LiveStreamAddAction";
import { MetadataAddAction } from "kaltura-node-typescript-client/api/types/MetadataAddAction";
import { KalturaMetadataObjectType } from "kaltura-node-typescript-client/api/types/KalturaMetadataObjectType";
import { KalturaRoomEntry } from "kaltura-node-typescript-client/api/types/KalturaRoomEntry";
import { KalturaRoomType } from "kaltura-node-typescript-client/api/types/KalturaRoomType";
import { BaseEntryAddAction } from 'kaltura-node-typescript-client/api/types/BaseEntryAddAction';
import { KalturaEntryStatus } from "kaltura-node-typescript-client/api/types/KalturaEntryStatus";
import { KalturaESearchEntryItem } from "kaltura-node-typescript-client/api/types/KalturaESearchEntryItem";
import { KalturaESearchEntryFieldName } from "kaltura-node-typescript-client/api/types/KalturaESearchEntryFieldName";

/**
 * KalturaEventModel class handles operations related to Kaltura virtual events.
 * Provides functionality for creating and managing virtual events, live sessions,
 * and room entries in the Kaltura platform.
 */
export class KalturaEventModel {
    private client = KalturaClientWrapper.getAdminClient();


      /**
     * Gets the metadata profile ID from config
     * @private
     * @returns number
     */
      private getMetadataProfileId(): number {
        return Number(config.get("metadataProfileId"));
    }


    /**
     * Creates a new virtual event.
     * @param eventName - The name of the event.
     * @param eventDescription - The description of the event.
     * @returns A promise that resolves to the created KalturaVirtualEvent.
     */
    async createEvent(eventName: string, eventDescription: string): Promise<KalturaVirtualEvent> {
        const virtualEvent = new KalturaVirtualEvent();
        virtualEvent.name = eventName;
        virtualEvent.description = eventDescription;

        const addAction = new VirtualEventAddAction({ virtualEvent });
        try {
            const result = await this.client.request(addAction);
            console.log("Event created successfully:", result);
            if (!result) {
                throw new Error('Failed to create event: null response');
            }
            return result;
        } catch (error) {
            console.error("Error creating event:", error);
            throw error;
        }
    }

    /**
     * Lists all virtual events.
     * @returns A promise that resolves to an array of KalturaVirtualEvent.
     */
    async listEvents(): Promise<KalturaVirtualEvent[]> {
        const filter = undefined;
        const pager = undefined;

        const listAction = new VirtualEventListAction({ filter, pager });
        try {
            const result = await this.client.request(listAction);
            console.log("Events retrieved successfully:", result?.objects);
            return result?.objects ?? [];
        } catch (error) {
            console.error("Error listing events:", error);
            throw error;
        }
    }

    /**
     * Retrieves sessions associated with a specific event ID using Kaltura's ESearch functionality.
     * Searches for entries with matching metadata profile field values and ready/noContent status.
     * 
     * @param eventId - The unique identifier of the event to search for
     * @returns Promise containing the search response with matching session entries
     * @throws Error if the search request fails
     */
    async getSessions(eventId: string): Promise<any> {
        
        const metadataProfileFieldId = config.get("metadataProfileFieldId");
        //Filter by Status
        const searchParams = new KalturaESearchEntryParams();
        searchParams.objectStatuses = `${KalturaEntryStatus.ready},${KalturaEntryStatus.noContent}`; 
        searchParams.searchOperator = new KalturaESearchEntryOperator();
        searchParams.searchOperator.operator = KalturaESearchOperatorType.andOp;
        searchParams.searchOperator.searchItems = [];
        
        //Filter by Type Room and Live 
        const entryTypeOperator = new KalturaESearchEntryOperator();
        entryTypeOperator.operator = KalturaESearchOperatorType.orOp;
        entryTypeOperator.searchItems = [];

        
        const entryTypeItem1 = new KalturaESearchEntryItem({
            itemType: KalturaESearchItemType.exactMatch,
            fieldName: KalturaESearchEntryFieldName.entryType,
            searchTerm: 'room.room'
        });
        entryTypeOperator.searchItems.push(entryTypeItem1);

        const entryTypeItem2 = new KalturaESearchEntryItem({
            itemType: KalturaESearchItemType.exactMatch,
            fieldName: KalturaESearchEntryFieldName.entryType,
            searchTerm: '7'
        });
        entryTypeOperator.searchItems.push(entryTypeItem2);

        
        searchParams.searchOperator.searchItems.push(entryTypeOperator);

        //Filter by metedata value(Event ID)
        const metadataItem = new KalturaESearchEntryMetadataItem();
        metadataItem.metadataFieldId = Number(metadataProfileFieldId);
        metadataItem.metadataProfileId = Number(this.getMetadataProfileId());
        metadataItem.itemType = KalturaESearchItemType.exactMatch;
        metadataItem.searchTerm = eventId;
        searchParams.searchOperator.searchItems.push(metadataItem);

        const pager = new KalturaPager();
        console.log("searchParams ", searchParams);
        try {
            const response = await this.client.request(new ESearchSearchEntryAction({ searchParams, pager }));
            console.log("Event retrieved successfully:", response);
            if (response.objects) {
                response.objects.forEach((entry: any) => {
                    console.log(entry.object.id);
                });
            }
            return response;
        } catch (error) {
            console.error("Error retrieving event by ID:", error);
            throw error;
        }
    }

    /**
     * Retrieves a session entry by its ID using the BaseEntry service.
     * 
     * @param entryId - The unique identifier of the session/entry to retrieve
     * @returns Promise containing the session/entry details
     * @throws Error if the retrieval request fails
     */
    static async getSession(entryId: string): Promise<any> {
        const getAction = new BaseEntryGetAction({ entryId: entryId });
        try {
            const result = await KalturaClientWrapper.getAdminClient().request(getAction);
            console.log("Event retrieved successfully:", result);
            return result;
        } catch (error) {
            console.error("Error retrieving entry by ID:", error);
            throw error;
        }
    }

    /**
     * Creates a live session and associates it with metadata.
     * This method performs two operations:
     * 1. Creates a live stream entry with the specified name and description
     * 2. Associates the live stream with an event through metadata
     * 
     * @param eventName - The name of the live event
     * @param eventDescription - The description of the live event
     * @param sessionEventId - The ID of the session event to associate with the live stream
     * @returns Promise containing both the live stream response and metadata response
     * @throws Error if either the live stream creation or metadata association fails
     */
    async createLiveEntry(eventName: string, eventDescription: string, sessionEventId: string) {
        try {
            const { id: partnerId, adminSecret, adminUserId } = config.get("partner") || { adminUserId: "" };
            const userId = adminUserId || "";

            const liveStreamEntry = new KalturaLiveStreamAdminEntry({
                name: eventName,
                description: eventDescription,
                mediaType: KalturaMediaType.liveStreamFlash,
                sourceType: KalturaSourceType.liveStream,
                userId: userId

            });

            const addLiveStreamAction = new LiveStreamAddAction({ liveStreamEntry });
            const liveStreamResponse = await KalturaClientWrapper.getAdminClient().request(addLiveStreamAction);

            const liveStreamId = liveStreamResponse?.id;

            if (!liveStreamId) {
                throw new Error("Failed to retrieve the live stream ID from the response.");
            }

            
            const metadataFieldName = config.get("metadataFieldName");

            const metadataXml = `<metadata><${metadataFieldName}>${sessionEventId}</${metadataFieldName}></metadata>`;

            const metadataAction = new MetadataAddAction({
                metadataProfileId: Number(this.getMetadataProfileId()),
                objectType: KalturaMetadataObjectType.entry,
                objectId: liveStreamId,
                xmlData: metadataXml,
            });

            const metadataResponse = await KalturaClientWrapper.getAdminClient().request(metadataAction);

            console.log("Metadata added successfully:", metadataResponse);

            return { liveStreamResponse, metadataResponse };
        } catch (error) {
            console.error("Error creating live session and adding metadata:", error);
            throw error;
        }
    }

    /**
     * Creates a room entry and optionally associates it with a broadcast and metadata.
     * For DIY cases, the room will be associated with a broadcast entry and template.
     * If roomEventId is provided, metadata will be added to link the room with an event.
     * 
     * @param name - The name of the room entry
     * @param description - The description of the room entry
     * @param broadcastEntryId - The ID of the broadcast entry (required for DIY cases)
     * @param roomEventId - The ID of the event to associate with the room through metadata
     * @returns Promise containing the created room entry and metadata response
     * @throws Error if room creation or metadata association fails
     */
    async createRoomEntry(name: string, description: string, broadcastEntryId: string, roomEventId: string): Promise<any> {
        let metadataResponse = null; // Initialize metadataResponse
        try {
            const roomTemplateId = config.get("roomTemplateId");
            const roomEntry = new KalturaRoomEntry();
            roomEntry.name = name;
            roomEntry.description = description;
            roomEntry.roomType = KalturaRoomType.room;

            // Only assign if broadcastEntryId is not null meaning this is a DIY case
            if (broadcastEntryId) {
                roomEntry.broadcastEntryId = broadcastEntryId;
                roomEntry.templateRoomEntryId = roomTemplateId;
            }

            const addAction = new BaseEntryAddAction({ entry: roomEntry });
            const result = await this.client.request(addAction);
            if (roomEventId && result?.id) {
               
                const metadataFieldName = config.get("metadataFieldName");
                const metadataXml = `<metadata><${metadataFieldName}>${roomEventId}</${metadataFieldName}></metadata>`;

                const metadataAction = new MetadataAddAction({
                    metadataProfileId: Number(this.getMetadataProfileId()),
                    objectType: KalturaMetadataObjectType.entry,
                    objectId: result.id, // Use the ID of the created room entry
                    xmlData: metadataXml,
                });

                metadataResponse = await this.client.request(metadataAction);
                console.log("Metadata added successfully:", metadataResponse);
            } else {
                console.error("Error: roomEventId is null or result.id is null, cannot prepare metadata.");
            }
            console.log("Room entry created successfully:", result);
            return { result, metadataResponse };
        } catch (error) {
            console.error("Error creating room entry:", error);
            throw error;
        }
    }
}
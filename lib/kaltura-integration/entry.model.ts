// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { BaseEntryGetAction } from "kaltura-node-typescript-client/api/types/BaseEntryGetAction";
import { KalturaClientWrapper } from "./kaltura-client-wrapper";
import { KalturaBaseEntry } from "kaltura-node-typescript-client/api/types/KalturaBaseEntry";
import { KalturaMediaEntry } from "kaltura-node-typescript-client/api/types/KalturaMediaEntry";
import { KalturaLiveStreamEntry } from "kaltura-node-typescript-client/api/types/KalturaLiveStreamEntry";
import { CacheContainer } from 'node-ts-cache'
import { MemoryStorage } from 'node-ts-cache-storage-memory'
import { XhrLogMessage, xhrLogMessages } from "../xhrLogMessages";

export class entryModel {
    private static modelCache = new CacheContainer(new MemoryStorage());
    private static ENTRY_OBJECT_CACHE_TTL = 86400; // 1 day cache

    public static async getEntry(entryId: string): Promise<KalturaBaseEntry | null> {
        if (!entryId) {
            console.log("no entry ID given");
            return null;
        }
        const cachedEntry = await this.modelCache.getItem<KalturaBaseEntry>("entry_" + entryId);
        if (cachedEntry) {
            xhrLogMessages.addMessage( new XhrLogMessage('entry', { isCached: true}));
            return cachedEntry;
        }

        const client = KalturaClientWrapper.getAdminClient();

        try {
            const startTime = Date.now();
            const entry = await client.request(new BaseEntryGetAction({ entryId }).setRequestOptions({ acceptedTypes: [KalturaMediaEntry, KalturaLiveStreamEntry] }));
            const timing = Date.now()-startTime;
            xhrLogMessages.addMessage(new XhrLogMessage('entry', {isFetched: true, timing}));
            await this.modelCache.setItem("entry_" + entryId, entry, { ttl: this.ENTRY_OBJECT_CACHE_TTL });
            return entry;
        } catch (e) {
            console.log(e.message);
            return null;
        }
    }
}
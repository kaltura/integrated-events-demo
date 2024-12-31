import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaEntryLiveStats, KalturaEntryLiveStatsArgs } from './KalturaEntryLiveStats';
export interface KalturaEntryReferrerLiveStatsArgs extends KalturaEntryLiveStatsArgs {
    referrer?: string;
}
export declare class KalturaEntryReferrerLiveStats extends KalturaEntryLiveStats {
    referrer: string;
    constructor(data?: KalturaEntryReferrerLiveStatsArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaLiveStats, KalturaLiveStatsArgs } from './KalturaLiveStats';
export interface KalturaEntryLiveStatsArgs extends KalturaLiveStatsArgs {
    entryId?: string;
    peakAudience?: number;
    peakDvrAudience?: number;
}
export declare class KalturaEntryLiveStats extends KalturaLiveStats {
    entryId: string;
    peakAudience: number;
    peakDvrAudience: number;
    constructor(data?: KalturaEntryLiveStatsArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaJobData, KalturaJobDataArgs } from './KalturaJobData';
export interface KalturaLiveToVodJobDataArgs extends KalturaJobDataArgs {
    vodEntryId?: string;
    liveEntryId?: string;
    totalVodDuration?: number;
    lastSegmentDuration?: number;
    amfArray?: string;
    lastCuePointSyncTime?: Date;
    lastSegmentDrift?: number;
}
export declare class KalturaLiveToVodJobData extends KalturaJobData {
    vodEntryId: string;
    liveEntryId: string;
    totalVodDuration: number;
    lastSegmentDuration: number;
    amfArray: string;
    lastCuePointSyncTime: Date;
    lastSegmentDrift: number;
    constructor(data?: KalturaLiveToVodJobDataArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

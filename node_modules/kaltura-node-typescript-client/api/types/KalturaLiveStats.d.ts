import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';
export interface KalturaLiveStatsArgs extends KalturaObjectBaseArgs {
    audience?: number;
    dvrAudience?: number;
    avgBitrate?: number;
    bufferTime?: number;
    plays?: number;
    secondsViewed?: number;
    startEvent?: number;
    timestamp?: Date;
}
export declare class KalturaLiveStats extends KalturaObjectBase {
    audience: number;
    dvrAudience: number;
    avgBitrate: number;
    bufferTime: number;
    plays: number;
    secondsViewed: number;
    startEvent: number;
    timestamp: Date;
    constructor(data?: KalturaLiveStatsArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

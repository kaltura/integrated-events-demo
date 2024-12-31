import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaLiveStatsEventType } from './KalturaLiveStatsEventType';
import { KalturaPlaybackProtocol } from './KalturaPlaybackProtocol';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';
export interface KalturaLiveStatsEventArgs extends KalturaObjectBaseArgs {
    partnerId?: number;
    entryId?: string;
    eventType?: KalturaLiveStatsEventType;
    sessionId?: string;
    eventIndex?: number;
    bufferTime?: number;
    bitrate?: number;
    referrer?: string;
    isLive?: boolean;
    startTime?: string;
    deliveryType?: KalturaPlaybackProtocol;
}
export declare class KalturaLiveStatsEvent extends KalturaObjectBase {
    partnerId: number;
    entryId: string;
    eventType: KalturaLiveStatsEventType;
    sessionId: string;
    eventIndex: number;
    bufferTime: number;
    bitrate: number;
    referrer: string;
    isLive: boolean;
    startTime: string;
    deliveryType: KalturaPlaybackProtocol;
    constructor(data?: KalturaLiveStatsEventArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

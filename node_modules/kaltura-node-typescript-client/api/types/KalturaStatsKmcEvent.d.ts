import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaStatsKmcEventType } from './KalturaStatsKmcEventType';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';
export interface KalturaStatsKmcEventArgs extends KalturaObjectBaseArgs {
    clientVer?: string;
    kmcEventActionPath?: string;
    kmcEventType?: KalturaStatsKmcEventType;
    eventTimestamp?: number;
    sessionId?: string;
    partnerId?: number;
    entryId?: string;
    widgetId?: string;
    uiconfId?: number;
    userId?: string;
}
export declare class KalturaStatsKmcEvent extends KalturaObjectBase {
    clientVer: string;
    kmcEventActionPath: string;
    kmcEventType: KalturaStatsKmcEventType;
    eventTimestamp: number;
    sessionId: string;
    partnerId: number;
    entryId: string;
    widgetId: string;
    uiconfId: number;
    userId: string;
    readonly userIp: string;
    constructor(data?: KalturaStatsKmcEventArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

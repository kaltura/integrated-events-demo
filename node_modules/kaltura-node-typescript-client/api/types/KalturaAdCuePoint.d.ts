import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaAdProtocolType } from './KalturaAdProtocolType';
import { KalturaAdType } from './KalturaAdType';
import { KalturaCuePoint, KalturaCuePointArgs } from './KalturaCuePoint';
export interface KalturaAdCuePointArgs extends KalturaCuePointArgs {
    protocolType?: KalturaAdProtocolType;
    sourceUrl?: string;
    adType?: KalturaAdType;
    title?: string;
    endTime?: number;
    duration?: number;
}
export declare class KalturaAdCuePoint extends KalturaCuePoint {
    protocolType: KalturaAdProtocolType;
    sourceUrl: string;
    adType: KalturaAdType;
    title: string;
    endTime: number;
    duration: number;
    constructor(data?: KalturaAdCuePointArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

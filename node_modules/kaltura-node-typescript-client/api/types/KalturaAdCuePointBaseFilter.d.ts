import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaAdProtocolType } from './KalturaAdProtocolType';
import { KalturaCuePointFilter, KalturaCuePointFilterArgs } from './KalturaCuePointFilter';
export interface KalturaAdCuePointBaseFilterArgs extends KalturaCuePointFilterArgs {
    protocolTypeEqual?: KalturaAdProtocolType;
    protocolTypeIn?: string;
    titleLike?: string;
    titleMultiLikeOr?: string;
    titleMultiLikeAnd?: string;
    endTimeGreaterThanOrEqual?: number;
    endTimeLessThanOrEqual?: number;
    durationGreaterThanOrEqual?: number;
    durationLessThanOrEqual?: number;
}
export declare class KalturaAdCuePointBaseFilter extends KalturaCuePointFilter {
    protocolTypeEqual: KalturaAdProtocolType;
    protocolTypeIn: string;
    titleLike: string;
    titleMultiLikeOr: string;
    titleMultiLikeAnd: string;
    endTimeGreaterThanOrEqual: number;
    endTimeLessThanOrEqual: number;
    durationGreaterThanOrEqual: number;
    durationLessThanOrEqual: number;
    constructor(data?: KalturaAdCuePointBaseFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

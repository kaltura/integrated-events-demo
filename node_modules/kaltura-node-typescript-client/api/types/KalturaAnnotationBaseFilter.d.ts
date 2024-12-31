import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaNullableBoolean } from './KalturaNullableBoolean';
import { KalturaCuePointFilter, KalturaCuePointFilterArgs } from './KalturaCuePointFilter';
export interface KalturaAnnotationBaseFilterArgs extends KalturaCuePointFilterArgs {
    parentIdEqual?: string;
    parentIdIn?: string;
    textLike?: string;
    textMultiLikeOr?: string;
    textMultiLikeAnd?: string;
    endTimeGreaterThanOrEqual?: number;
    endTimeLessThanOrEqual?: number;
    durationGreaterThanOrEqual?: number;
    durationLessThanOrEqual?: number;
    isPublicEqual?: KalturaNullableBoolean;
}
export declare class KalturaAnnotationBaseFilter extends KalturaCuePointFilter {
    parentIdEqual: string;
    parentIdIn: string;
    textLike: string;
    textMultiLikeOr: string;
    textMultiLikeAnd: string;
    endTimeGreaterThanOrEqual: number;
    endTimeLessThanOrEqual: number;
    durationGreaterThanOrEqual: number;
    durationLessThanOrEqual: number;
    isPublicEqual: KalturaNullableBoolean;
    constructor(data?: KalturaAnnotationBaseFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

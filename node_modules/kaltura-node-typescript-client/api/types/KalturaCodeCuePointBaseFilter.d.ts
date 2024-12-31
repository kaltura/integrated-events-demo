import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaCuePointFilter, KalturaCuePointFilterArgs } from './KalturaCuePointFilter';
export interface KalturaCodeCuePointBaseFilterArgs extends KalturaCuePointFilterArgs {
    codeLike?: string;
    codeMultiLikeOr?: string;
    codeMultiLikeAnd?: string;
    codeEqual?: string;
    codeIn?: string;
    descriptionLike?: string;
    descriptionMultiLikeOr?: string;
    descriptionMultiLikeAnd?: string;
    endTimeGreaterThanOrEqual?: number;
    endTimeLessThanOrEqual?: number;
    durationGreaterThanOrEqual?: number;
    durationLessThanOrEqual?: number;
}
export declare class KalturaCodeCuePointBaseFilter extends KalturaCuePointFilter {
    codeLike: string;
    codeMultiLikeOr: string;
    codeMultiLikeAnd: string;
    codeEqual: string;
    codeIn: string;
    descriptionLike: string;
    descriptionMultiLikeOr: string;
    descriptionMultiLikeAnd: string;
    endTimeGreaterThanOrEqual: number;
    endTimeLessThanOrEqual: number;
    durationGreaterThanOrEqual: number;
    durationLessThanOrEqual: number;
    constructor(data?: KalturaCodeCuePointBaseFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

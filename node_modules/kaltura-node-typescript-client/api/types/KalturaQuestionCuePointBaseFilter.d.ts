import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaCuePointFilter, KalturaCuePointFilterArgs } from './KalturaCuePointFilter';
export interface KalturaQuestionCuePointBaseFilterArgs extends KalturaCuePointFilterArgs {
    questionLike?: string;
    questionMultiLikeOr?: string;
    questionMultiLikeAnd?: string;
}
export declare class KalturaQuestionCuePointBaseFilter extends KalturaCuePointFilter {
    questionLike: string;
    questionMultiLikeOr: string;
    questionMultiLikeAnd: string;
    constructor(data?: KalturaQuestionCuePointBaseFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

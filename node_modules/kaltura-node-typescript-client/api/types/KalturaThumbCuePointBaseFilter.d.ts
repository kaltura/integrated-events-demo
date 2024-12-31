import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaThumbCuePointSubType } from './KalturaThumbCuePointSubType';
import { KalturaCuePointFilter, KalturaCuePointFilterArgs } from './KalturaCuePointFilter';
export interface KalturaThumbCuePointBaseFilterArgs extends KalturaCuePointFilterArgs {
    descriptionLike?: string;
    descriptionMultiLikeOr?: string;
    descriptionMultiLikeAnd?: string;
    titleLike?: string;
    titleMultiLikeOr?: string;
    titleMultiLikeAnd?: string;
    subTypeEqual?: KalturaThumbCuePointSubType;
    subTypeIn?: string;
}
export declare class KalturaThumbCuePointBaseFilter extends KalturaCuePointFilter {
    descriptionLike: string;
    descriptionMultiLikeOr: string;
    descriptionMultiLikeAnd: string;
    titleLike: string;
    titleMultiLikeOr: string;
    titleMultiLikeAnd: string;
    subTypeEqual: KalturaThumbCuePointSubType;
    subTypeIn: string;
    constructor(data?: KalturaThumbCuePointBaseFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

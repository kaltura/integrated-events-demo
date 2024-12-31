import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaLanguage } from './KalturaLanguage';
import { KalturaCaptionAssetFilter, KalturaCaptionAssetFilterArgs } from './KalturaCaptionAssetFilter';
export interface KalturaCaptionAssetItemFilterArgs extends KalturaCaptionAssetFilterArgs {
    contentLike?: string;
    contentMultiLikeOr?: string;
    contentMultiLikeAnd?: string;
    partnerDescriptionLike?: string;
    partnerDescriptionMultiLikeOr?: string;
    partnerDescriptionMultiLikeAnd?: string;
    languageEqual?: KalturaLanguage;
    languageIn?: string;
    labelEqual?: string;
    labelIn?: string;
    startTimeGreaterThanOrEqual?: number;
    startTimeLessThanOrEqual?: number;
    endTimeGreaterThanOrEqual?: number;
    endTimeLessThanOrEqual?: number;
}
export declare class KalturaCaptionAssetItemFilter extends KalturaCaptionAssetFilter {
    contentLike: string;
    contentMultiLikeOr: string;
    contentMultiLikeAnd: string;
    partnerDescriptionLike: string;
    partnerDescriptionMultiLikeOr: string;
    partnerDescriptionMultiLikeAnd: string;
    languageEqual: KalturaLanguage;
    languageIn: string;
    labelEqual: string;
    labelIn: string;
    startTimeGreaterThanOrEqual: number;
    startTimeLessThanOrEqual: number;
    endTimeGreaterThanOrEqual: number;
    endTimeLessThanOrEqual: number;
    constructor(data?: KalturaCaptionAssetItemFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

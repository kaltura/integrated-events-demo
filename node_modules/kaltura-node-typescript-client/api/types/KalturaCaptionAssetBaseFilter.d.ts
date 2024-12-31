import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaCaptionType } from './KalturaCaptionType';
import { KalturaCaptionAssetStatus } from './KalturaCaptionAssetStatus';
import { KalturaAssetFilter, KalturaAssetFilterArgs } from './KalturaAssetFilter';
export interface KalturaCaptionAssetBaseFilterArgs extends KalturaAssetFilterArgs {
    captionParamsIdEqual?: number;
    captionParamsIdIn?: string;
    formatEqual?: KalturaCaptionType;
    formatIn?: string;
    statusEqual?: KalturaCaptionAssetStatus;
    statusIn?: string;
    statusNotIn?: string;
}
export declare class KalturaCaptionAssetBaseFilter extends KalturaAssetFilter {
    captionParamsIdEqual: number;
    captionParamsIdIn: string;
    formatEqual: KalturaCaptionType;
    formatIn: string;
    statusEqual: KalturaCaptionAssetStatus;
    statusIn: string;
    statusNotIn: string;
    constructor(data?: KalturaCaptionAssetBaseFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

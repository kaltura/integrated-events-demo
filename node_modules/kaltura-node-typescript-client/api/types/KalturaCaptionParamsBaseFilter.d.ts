import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaCaptionType } from './KalturaCaptionType';
import { KalturaAssetParamsFilter, KalturaAssetParamsFilterArgs } from './KalturaAssetParamsFilter';
export interface KalturaCaptionParamsBaseFilterArgs extends KalturaAssetParamsFilterArgs {
    formatEqual?: KalturaCaptionType;
    formatIn?: string;
}
export declare class KalturaCaptionParamsBaseFilter extends KalturaAssetParamsFilter {
    formatEqual: KalturaCaptionType;
    formatIn: string;
    constructor(data?: KalturaCaptionParamsBaseFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

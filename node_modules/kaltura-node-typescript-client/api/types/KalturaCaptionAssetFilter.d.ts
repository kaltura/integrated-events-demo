import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaCaptionAssetBaseFilter, KalturaCaptionAssetBaseFilterArgs } from './KalturaCaptionAssetBaseFilter';
export interface KalturaCaptionAssetFilterArgs extends KalturaCaptionAssetBaseFilterArgs {
}
export declare class KalturaCaptionAssetFilter extends KalturaCaptionAssetBaseFilter {
    constructor(data?: KalturaCaptionAssetFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

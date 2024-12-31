import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaWidevineFlavorAssetBaseFilter, KalturaWidevineFlavorAssetBaseFilterArgs } from './KalturaWidevineFlavorAssetBaseFilter';
export interface KalturaWidevineFlavorAssetFilterArgs extends KalturaWidevineFlavorAssetBaseFilterArgs {
}
export declare class KalturaWidevineFlavorAssetFilter extends KalturaWidevineFlavorAssetBaseFilter {
    constructor(data?: KalturaWidevineFlavorAssetFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

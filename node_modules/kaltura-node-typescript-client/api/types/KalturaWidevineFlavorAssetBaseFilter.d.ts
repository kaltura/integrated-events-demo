import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaFlavorAssetFilter, KalturaFlavorAssetFilterArgs } from './KalturaFlavorAssetFilter';
export interface KalturaWidevineFlavorAssetBaseFilterArgs extends KalturaFlavorAssetFilterArgs {
}
export declare class KalturaWidevineFlavorAssetBaseFilter extends KalturaFlavorAssetFilter {
    constructor(data?: KalturaWidevineFlavorAssetBaseFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaFlavorAssetBaseFilter, KalturaFlavorAssetBaseFilterArgs } from './KalturaFlavorAssetBaseFilter';
export interface KalturaFlavorAssetFilterArgs extends KalturaFlavorAssetBaseFilterArgs {
}
export declare class KalturaFlavorAssetFilter extends KalturaFlavorAssetBaseFilter {
    constructor(data?: KalturaFlavorAssetFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaFlavorAssetFilter, KalturaFlavorAssetFilterArgs } from './KalturaFlavorAssetFilter';
export interface KalturaLiveAssetBaseFilterArgs extends KalturaFlavorAssetFilterArgs {
}
export declare class KalturaLiveAssetBaseFilter extends KalturaFlavorAssetFilter {
    constructor(data?: KalturaLiveAssetBaseFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

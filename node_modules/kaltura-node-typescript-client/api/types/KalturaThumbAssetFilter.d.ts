import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaThumbAssetBaseFilter, KalturaThumbAssetBaseFilterArgs } from './KalturaThumbAssetBaseFilter';
export interface KalturaThumbAssetFilterArgs extends KalturaThumbAssetBaseFilterArgs {
}
export declare class KalturaThumbAssetFilter extends KalturaThumbAssetBaseFilter {
    constructor(data?: KalturaThumbAssetFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

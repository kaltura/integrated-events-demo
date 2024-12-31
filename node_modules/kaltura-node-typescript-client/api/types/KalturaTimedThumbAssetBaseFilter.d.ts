import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaThumbAssetFilter, KalturaThumbAssetFilterArgs } from './KalturaThumbAssetFilter';
export interface KalturaTimedThumbAssetBaseFilterArgs extends KalturaThumbAssetFilterArgs {
}
export declare class KalturaTimedThumbAssetBaseFilter extends KalturaThumbAssetFilter {
    constructor(data?: KalturaTimedThumbAssetBaseFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

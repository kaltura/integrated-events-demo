import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTimedThumbAssetBaseFilter, KalturaTimedThumbAssetBaseFilterArgs } from './KalturaTimedThumbAssetBaseFilter';
export interface KalturaTimedThumbAssetFilterArgs extends KalturaTimedThumbAssetBaseFilterArgs {
}
export declare class KalturaTimedThumbAssetFilter extends KalturaTimedThumbAssetBaseFilter {
    constructor(data?: KalturaTimedThumbAssetFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

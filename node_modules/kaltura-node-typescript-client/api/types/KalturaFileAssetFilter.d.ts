import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaFileAssetBaseFilter, KalturaFileAssetBaseFilterArgs } from './KalturaFileAssetBaseFilter';
export interface KalturaFileAssetFilterArgs extends KalturaFileAssetBaseFilterArgs {
}
export declare class KalturaFileAssetFilter extends KalturaFileAssetBaseFilter {
    constructor(data?: KalturaFileAssetFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

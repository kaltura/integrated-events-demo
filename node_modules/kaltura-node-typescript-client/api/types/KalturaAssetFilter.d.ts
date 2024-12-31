import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaAssetBaseFilter, KalturaAssetBaseFilterArgs } from './KalturaAssetBaseFilter';
export interface KalturaAssetFilterArgs extends KalturaAssetBaseFilterArgs {
    typeIn?: string;
}
export declare class KalturaAssetFilter extends KalturaAssetBaseFilter {
    typeIn: string;
    constructor(data?: KalturaAssetFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaAssetParamsFilter, KalturaAssetParamsFilterArgs } from './KalturaAssetParamsFilter';
export interface KalturaAssetParamsOutputBaseFilterArgs extends KalturaAssetParamsFilterArgs {
}
export declare class KalturaAssetParamsOutputBaseFilter extends KalturaAssetParamsFilter {
    constructor(data?: KalturaAssetParamsOutputBaseFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

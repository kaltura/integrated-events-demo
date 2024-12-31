import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaAssetParamsOutputBaseFilter, KalturaAssetParamsOutputBaseFilterArgs } from './KalturaAssetParamsOutputBaseFilter';
export interface KalturaAssetParamsOutputFilterArgs extends KalturaAssetParamsOutputBaseFilterArgs {
}
export declare class KalturaAssetParamsOutputFilter extends KalturaAssetParamsOutputBaseFilter {
    constructor(data?: KalturaAssetParamsOutputFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

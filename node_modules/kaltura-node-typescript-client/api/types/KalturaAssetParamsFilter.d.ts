import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaAssetParamsBaseFilter, KalturaAssetParamsBaseFilterArgs } from './KalturaAssetParamsBaseFilter';
export interface KalturaAssetParamsFilterArgs extends KalturaAssetParamsBaseFilterArgs {
}
export declare class KalturaAssetParamsFilter extends KalturaAssetParamsBaseFilter {
    constructor(data?: KalturaAssetParamsFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

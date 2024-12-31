import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaConversionProfileAssetParams } from './KalturaConversionProfileAssetParams';
import { KalturaListResponse, KalturaListResponseArgs } from './KalturaListResponse';
export interface KalturaConversionProfileAssetParamsListResponseArgs extends KalturaListResponseArgs {
}
export declare class KalturaConversionProfileAssetParamsListResponse extends KalturaListResponse {
    readonly objects: KalturaConversionProfileAssetParams[];
    constructor(data?: KalturaConversionProfileAssetParamsListResponseArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

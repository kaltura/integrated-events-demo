import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaConversionProfileFilter } from './KalturaConversionProfileFilter';
import { KalturaAssetParamsFilter } from './KalturaAssetParamsFilter';
import { KalturaConversionProfileAssetParamsBaseFilter, KalturaConversionProfileAssetParamsBaseFilterArgs } from './KalturaConversionProfileAssetParamsBaseFilter';
export interface KalturaConversionProfileAssetParamsFilterArgs extends KalturaConversionProfileAssetParamsBaseFilterArgs {
    conversionProfileIdFilter?: KalturaConversionProfileFilter;
    assetParamsIdFilter?: KalturaAssetParamsFilter;
}
export declare class KalturaConversionProfileAssetParamsFilter extends KalturaConversionProfileAssetParamsBaseFilter {
    conversionProfileIdFilter: KalturaConversionProfileFilter;
    assetParamsIdFilter: KalturaAssetParamsFilter;
    constructor(data?: KalturaConversionProfileAssetParamsFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

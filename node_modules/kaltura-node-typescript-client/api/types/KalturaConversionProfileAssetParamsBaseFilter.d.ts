import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaFlavorReadyBehaviorType } from './KalturaFlavorReadyBehaviorType';
import { KalturaAssetParamsOrigin } from './KalturaAssetParamsOrigin';
import { KalturaRelatedFilter, KalturaRelatedFilterArgs } from './KalturaRelatedFilter';
export interface KalturaConversionProfileAssetParamsBaseFilterArgs extends KalturaRelatedFilterArgs {
    conversionProfileIdEqual?: number;
    conversionProfileIdIn?: string;
    assetParamsIdEqual?: number;
    assetParamsIdIn?: string;
    readyBehaviorEqual?: KalturaFlavorReadyBehaviorType;
    readyBehaviorIn?: string;
    originEqual?: KalturaAssetParamsOrigin;
    originIn?: string;
    systemNameEqual?: string;
    systemNameIn?: string;
}
export declare class KalturaConversionProfileAssetParamsBaseFilter extends KalturaRelatedFilter {
    conversionProfileIdEqual: number;
    conversionProfileIdIn: string;
    assetParamsIdEqual: number;
    assetParamsIdIn: string;
    readyBehaviorEqual: KalturaFlavorReadyBehaviorType;
    readyBehaviorIn: string;
    originEqual: KalturaAssetParamsOrigin;
    originIn: string;
    systemNameEqual: string;
    systemNameIn: string;
    constructor(data?: KalturaConversionProfileAssetParamsBaseFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

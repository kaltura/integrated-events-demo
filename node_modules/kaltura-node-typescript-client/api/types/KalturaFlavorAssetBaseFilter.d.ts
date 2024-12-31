import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaFlavorAssetStatus } from './KalturaFlavorAssetStatus';
import { KalturaAssetFilter, KalturaAssetFilterArgs } from './KalturaAssetFilter';
export interface KalturaFlavorAssetBaseFilterArgs extends KalturaAssetFilterArgs {
    flavorParamsIdEqual?: number;
    flavorParamsIdIn?: string;
    statusEqual?: KalturaFlavorAssetStatus;
    statusIn?: string;
    statusNotIn?: string;
}
export declare class KalturaFlavorAssetBaseFilter extends KalturaAssetFilter {
    flavorParamsIdEqual: number;
    flavorParamsIdIn: string;
    statusEqual: KalturaFlavorAssetStatus;
    statusIn: string;
    statusNotIn: string;
    constructor(data?: KalturaFlavorAssetBaseFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

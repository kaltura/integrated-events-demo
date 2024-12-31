import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaFlavorParamsFilter, KalturaFlavorParamsFilterArgs } from './KalturaFlavorParamsFilter';
export interface KalturaFlavorParamsOutputBaseFilterArgs extends KalturaFlavorParamsFilterArgs {
    flavorParamsIdEqual?: number;
    flavorParamsVersionEqual?: string;
    flavorAssetIdEqual?: string;
    flavorAssetVersionEqual?: string;
}
export declare class KalturaFlavorParamsOutputBaseFilter extends KalturaFlavorParamsFilter {
    flavorParamsIdEqual: number;
    flavorParamsVersionEqual: string;
    flavorAssetIdEqual: string;
    flavorAssetVersionEqual: string;
    constructor(data?: KalturaFlavorParamsOutputBaseFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

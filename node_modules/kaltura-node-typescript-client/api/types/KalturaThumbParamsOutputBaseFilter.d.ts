import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaThumbParamsFilter, KalturaThumbParamsFilterArgs } from './KalturaThumbParamsFilter';
export interface KalturaThumbParamsOutputBaseFilterArgs extends KalturaThumbParamsFilterArgs {
    thumbParamsIdEqual?: number;
    thumbParamsVersionEqual?: string;
    thumbAssetIdEqual?: string;
    thumbAssetVersionEqual?: string;
}
export declare class KalturaThumbParamsOutputBaseFilter extends KalturaThumbParamsFilter {
    thumbParamsIdEqual: number;
    thumbParamsVersionEqual: string;
    thumbAssetIdEqual: string;
    thumbAssetVersionEqual: string;
    constructor(data?: KalturaThumbParamsOutputBaseFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

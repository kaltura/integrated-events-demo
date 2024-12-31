import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaThumbAssetStatus } from './KalturaThumbAssetStatus';
import { KalturaAssetFilter, KalturaAssetFilterArgs } from './KalturaAssetFilter';
export interface KalturaThumbAssetBaseFilterArgs extends KalturaAssetFilterArgs {
    thumbParamsIdEqual?: number;
    thumbParamsIdIn?: string;
    statusEqual?: KalturaThumbAssetStatus;
    statusIn?: string;
    statusNotIn?: string;
}
export declare class KalturaThumbAssetBaseFilter extends KalturaAssetFilter {
    thumbParamsIdEqual: number;
    thumbParamsIdIn: string;
    statusEqual: KalturaThumbAssetStatus;
    statusIn: string;
    statusNotIn: string;
    constructor(data?: KalturaThumbAssetBaseFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

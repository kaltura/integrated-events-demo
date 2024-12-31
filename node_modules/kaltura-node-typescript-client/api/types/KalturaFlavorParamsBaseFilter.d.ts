import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaContainerFormat } from './KalturaContainerFormat';
import { KalturaAssetParamsFilter, KalturaAssetParamsFilterArgs } from './KalturaAssetParamsFilter';
export interface KalturaFlavorParamsBaseFilterArgs extends KalturaAssetParamsFilterArgs {
    formatEqual?: KalturaContainerFormat;
}
export declare class KalturaFlavorParamsBaseFilter extends KalturaAssetParamsFilter {
    formatEqual: KalturaContainerFormat;
    constructor(data?: KalturaFlavorParamsBaseFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

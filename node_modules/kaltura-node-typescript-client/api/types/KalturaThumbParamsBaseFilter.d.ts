import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaContainerFormat } from './KalturaContainerFormat';
import { KalturaAssetParamsFilter, KalturaAssetParamsFilterArgs } from './KalturaAssetParamsFilter';
export interface KalturaThumbParamsBaseFilterArgs extends KalturaAssetParamsFilterArgs {
    formatEqual?: KalturaContainerFormat;
}
export declare class KalturaThumbParamsBaseFilter extends KalturaAssetParamsFilter {
    formatEqual: KalturaContainerFormat;
    constructor(data?: KalturaThumbParamsBaseFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

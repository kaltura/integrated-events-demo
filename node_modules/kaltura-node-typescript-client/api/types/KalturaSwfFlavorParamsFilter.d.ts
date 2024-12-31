import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaSwfFlavorParamsBaseFilter, KalturaSwfFlavorParamsBaseFilterArgs } from './KalturaSwfFlavorParamsBaseFilter';
export interface KalturaSwfFlavorParamsFilterArgs extends KalturaSwfFlavorParamsBaseFilterArgs {
}
export declare class KalturaSwfFlavorParamsFilter extends KalturaSwfFlavorParamsBaseFilter {
    constructor(data?: KalturaSwfFlavorParamsFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

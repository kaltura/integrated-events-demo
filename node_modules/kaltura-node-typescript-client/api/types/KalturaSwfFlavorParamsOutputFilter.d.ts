import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaSwfFlavorParamsOutputBaseFilter, KalturaSwfFlavorParamsOutputBaseFilterArgs } from './KalturaSwfFlavorParamsOutputBaseFilter';
export interface KalturaSwfFlavorParamsOutputFilterArgs extends KalturaSwfFlavorParamsOutputBaseFilterArgs {
}
export declare class KalturaSwfFlavorParamsOutputFilter extends KalturaSwfFlavorParamsOutputBaseFilter {
    constructor(data?: KalturaSwfFlavorParamsOutputFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

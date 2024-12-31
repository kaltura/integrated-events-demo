import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaFlavorParamsOutputFilter, KalturaFlavorParamsOutputFilterArgs } from './KalturaFlavorParamsOutputFilter';
export interface KalturaSwfFlavorParamsOutputBaseFilterArgs extends KalturaFlavorParamsOutputFilterArgs {
}
export declare class KalturaSwfFlavorParamsOutputBaseFilter extends KalturaFlavorParamsOutputFilter {
    constructor(data?: KalturaSwfFlavorParamsOutputBaseFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

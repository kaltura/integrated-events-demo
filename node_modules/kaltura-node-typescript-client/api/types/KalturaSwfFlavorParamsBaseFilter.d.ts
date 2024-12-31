import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaFlavorParamsFilter, KalturaFlavorParamsFilterArgs } from './KalturaFlavorParamsFilter';
export interface KalturaSwfFlavorParamsBaseFilterArgs extends KalturaFlavorParamsFilterArgs {
}
export declare class KalturaSwfFlavorParamsBaseFilter extends KalturaFlavorParamsFilter {
    constructor(data?: KalturaSwfFlavorParamsBaseFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

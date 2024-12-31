import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaFlavorParamsBaseFilter, KalturaFlavorParamsBaseFilterArgs } from './KalturaFlavorParamsBaseFilter';
export interface KalturaFlavorParamsFilterArgs extends KalturaFlavorParamsBaseFilterArgs {
}
export declare class KalturaFlavorParamsFilter extends KalturaFlavorParamsBaseFilter {
    constructor(data?: KalturaFlavorParamsFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

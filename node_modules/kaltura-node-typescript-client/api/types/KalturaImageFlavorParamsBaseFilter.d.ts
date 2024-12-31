import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaFlavorParamsFilter, KalturaFlavorParamsFilterArgs } from './KalturaFlavorParamsFilter';
export interface KalturaImageFlavorParamsBaseFilterArgs extends KalturaFlavorParamsFilterArgs {
}
export declare class KalturaImageFlavorParamsBaseFilter extends KalturaFlavorParamsFilter {
    constructor(data?: KalturaImageFlavorParamsBaseFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

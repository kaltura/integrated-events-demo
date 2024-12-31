import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaFlavorParamsFilter, KalturaFlavorParamsFilterArgs } from './KalturaFlavorParamsFilter';
export interface KalturaMediaFlavorParamsBaseFilterArgs extends KalturaFlavorParamsFilterArgs {
}
export declare class KalturaMediaFlavorParamsBaseFilter extends KalturaFlavorParamsFilter {
    constructor(data?: KalturaMediaFlavorParamsBaseFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

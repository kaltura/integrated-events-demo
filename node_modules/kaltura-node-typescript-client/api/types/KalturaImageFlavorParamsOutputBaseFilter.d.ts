import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaFlavorParamsOutputFilter, KalturaFlavorParamsOutputFilterArgs } from './KalturaFlavorParamsOutputFilter';
export interface KalturaImageFlavorParamsOutputBaseFilterArgs extends KalturaFlavorParamsOutputFilterArgs {
}
export declare class KalturaImageFlavorParamsOutputBaseFilter extends KalturaFlavorParamsOutputFilter {
    constructor(data?: KalturaImageFlavorParamsOutputBaseFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

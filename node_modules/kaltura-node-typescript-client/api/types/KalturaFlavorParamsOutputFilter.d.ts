import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaFlavorParamsOutputBaseFilter, KalturaFlavorParamsOutputBaseFilterArgs } from './KalturaFlavorParamsOutputBaseFilter';
export interface KalturaFlavorParamsOutputFilterArgs extends KalturaFlavorParamsOutputBaseFilterArgs {
}
export declare class KalturaFlavorParamsOutputFilter extends KalturaFlavorParamsOutputBaseFilter {
    constructor(data?: KalturaFlavorParamsOutputFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

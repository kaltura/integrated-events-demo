import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaFlavorParamsOutputFilter, KalturaFlavorParamsOutputFilterArgs } from './KalturaFlavorParamsOutputFilter';
export interface KalturaMediaFlavorParamsOutputBaseFilterArgs extends KalturaFlavorParamsOutputFilterArgs {
}
export declare class KalturaMediaFlavorParamsOutputBaseFilter extends KalturaFlavorParamsOutputFilter {
    constructor(data?: KalturaMediaFlavorParamsOutputBaseFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

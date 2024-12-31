import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaMediaFlavorParamsOutputBaseFilter, KalturaMediaFlavorParamsOutputBaseFilterArgs } from './KalturaMediaFlavorParamsOutputBaseFilter';
export interface KalturaMediaFlavorParamsOutputFilterArgs extends KalturaMediaFlavorParamsOutputBaseFilterArgs {
}
export declare class KalturaMediaFlavorParamsOutputFilter extends KalturaMediaFlavorParamsOutputBaseFilter {
    constructor(data?: KalturaMediaFlavorParamsOutputFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

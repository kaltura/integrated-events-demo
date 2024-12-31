import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaImageFlavorParamsOutputBaseFilter, KalturaImageFlavorParamsOutputBaseFilterArgs } from './KalturaImageFlavorParamsOutputBaseFilter';
export interface KalturaImageFlavorParamsOutputFilterArgs extends KalturaImageFlavorParamsOutputBaseFilterArgs {
}
export declare class KalturaImageFlavorParamsOutputFilter extends KalturaImageFlavorParamsOutputBaseFilter {
    constructor(data?: KalturaImageFlavorParamsOutputFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

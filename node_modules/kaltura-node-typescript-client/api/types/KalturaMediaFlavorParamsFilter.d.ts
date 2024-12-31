import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaMediaFlavorParamsBaseFilter, KalturaMediaFlavorParamsBaseFilterArgs } from './KalturaMediaFlavorParamsBaseFilter';
export interface KalturaMediaFlavorParamsFilterArgs extends KalturaMediaFlavorParamsBaseFilterArgs {
}
export declare class KalturaMediaFlavorParamsFilter extends KalturaMediaFlavorParamsBaseFilter {
    constructor(data?: KalturaMediaFlavorParamsFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

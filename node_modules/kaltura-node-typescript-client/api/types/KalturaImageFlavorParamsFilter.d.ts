import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaImageFlavorParamsBaseFilter, KalturaImageFlavorParamsBaseFilterArgs } from './KalturaImageFlavorParamsBaseFilter';
export interface KalturaImageFlavorParamsFilterArgs extends KalturaImageFlavorParamsBaseFilterArgs {
}
export declare class KalturaImageFlavorParamsFilter extends KalturaImageFlavorParamsBaseFilter {
    constructor(data?: KalturaImageFlavorParamsFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

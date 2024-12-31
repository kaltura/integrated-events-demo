import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaFlavorParamsFilter, KalturaFlavorParamsFilterArgs } from './KalturaFlavorParamsFilter';
export interface KalturaWidevineFlavorParamsBaseFilterArgs extends KalturaFlavorParamsFilterArgs {
}
export declare class KalturaWidevineFlavorParamsBaseFilter extends KalturaFlavorParamsFilter {
    constructor(data?: KalturaWidevineFlavorParamsBaseFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

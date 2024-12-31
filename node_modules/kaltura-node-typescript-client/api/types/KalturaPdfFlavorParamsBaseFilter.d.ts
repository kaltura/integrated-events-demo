import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaFlavorParamsFilter, KalturaFlavorParamsFilterArgs } from './KalturaFlavorParamsFilter';
export interface KalturaPdfFlavorParamsBaseFilterArgs extends KalturaFlavorParamsFilterArgs {
}
export declare class KalturaPdfFlavorParamsBaseFilter extends KalturaFlavorParamsFilter {
    constructor(data?: KalturaPdfFlavorParamsBaseFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

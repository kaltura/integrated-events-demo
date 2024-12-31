import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaPdfFlavorParamsBaseFilter, KalturaPdfFlavorParamsBaseFilterArgs } from './KalturaPdfFlavorParamsBaseFilter';
export interface KalturaPdfFlavorParamsFilterArgs extends KalturaPdfFlavorParamsBaseFilterArgs {
}
export declare class KalturaPdfFlavorParamsFilter extends KalturaPdfFlavorParamsBaseFilter {
    constructor(data?: KalturaPdfFlavorParamsFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

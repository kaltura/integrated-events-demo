import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaPdfFlavorParamsOutputBaseFilter, KalturaPdfFlavorParamsOutputBaseFilterArgs } from './KalturaPdfFlavorParamsOutputBaseFilter';
export interface KalturaPdfFlavorParamsOutputFilterArgs extends KalturaPdfFlavorParamsOutputBaseFilterArgs {
}
export declare class KalturaPdfFlavorParamsOutputFilter extends KalturaPdfFlavorParamsOutputBaseFilter {
    constructor(data?: KalturaPdfFlavorParamsOutputFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

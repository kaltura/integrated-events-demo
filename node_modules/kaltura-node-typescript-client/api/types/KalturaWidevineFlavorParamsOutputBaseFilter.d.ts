import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaFlavorParamsOutputFilter, KalturaFlavorParamsOutputFilterArgs } from './KalturaFlavorParamsOutputFilter';
export interface KalturaWidevineFlavorParamsOutputBaseFilterArgs extends KalturaFlavorParamsOutputFilterArgs {
}
export declare class KalturaWidevineFlavorParamsOutputBaseFilter extends KalturaFlavorParamsOutputFilter {
    constructor(data?: KalturaWidevineFlavorParamsOutputBaseFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

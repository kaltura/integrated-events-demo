import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaWidevineFlavorParamsOutputBaseFilter, KalturaWidevineFlavorParamsOutputBaseFilterArgs } from './KalturaWidevineFlavorParamsOutputBaseFilter';
export interface KalturaWidevineFlavorParamsOutputFilterArgs extends KalturaWidevineFlavorParamsOutputBaseFilterArgs {
}
export declare class KalturaWidevineFlavorParamsOutputFilter extends KalturaWidevineFlavorParamsOutputBaseFilter {
    constructor(data?: KalturaWidevineFlavorParamsOutputFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

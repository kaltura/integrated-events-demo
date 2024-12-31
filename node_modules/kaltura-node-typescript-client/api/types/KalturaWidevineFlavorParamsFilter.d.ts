import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaWidevineFlavorParamsBaseFilter, KalturaWidevineFlavorParamsBaseFilterArgs } from './KalturaWidevineFlavorParamsBaseFilter';
export interface KalturaWidevineFlavorParamsFilterArgs extends KalturaWidevineFlavorParamsBaseFilterArgs {
}
export declare class KalturaWidevineFlavorParamsFilter extends KalturaWidevineFlavorParamsBaseFilter {
    constructor(data?: KalturaWidevineFlavorParamsFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

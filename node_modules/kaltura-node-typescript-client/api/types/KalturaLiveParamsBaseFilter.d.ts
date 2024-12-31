import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaFlavorParamsFilter, KalturaFlavorParamsFilterArgs } from './KalturaFlavorParamsFilter';
export interface KalturaLiveParamsBaseFilterArgs extends KalturaFlavorParamsFilterArgs {
}
export declare class KalturaLiveParamsBaseFilter extends KalturaFlavorParamsFilter {
    constructor(data?: KalturaLiveParamsBaseFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

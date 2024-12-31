import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaThumbParamsOutputBaseFilter, KalturaThumbParamsOutputBaseFilterArgs } from './KalturaThumbParamsOutputBaseFilter';
export interface KalturaThumbParamsOutputFilterArgs extends KalturaThumbParamsOutputBaseFilterArgs {
}
export declare class KalturaThumbParamsOutputFilter extends KalturaThumbParamsOutputBaseFilter {
    constructor(data?: KalturaThumbParamsOutputFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

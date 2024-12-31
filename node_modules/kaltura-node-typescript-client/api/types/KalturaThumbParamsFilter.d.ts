import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaThumbParamsBaseFilter, KalturaThumbParamsBaseFilterArgs } from './KalturaThumbParamsBaseFilter';
export interface KalturaThumbParamsFilterArgs extends KalturaThumbParamsBaseFilterArgs {
}
export declare class KalturaThumbParamsFilter extends KalturaThumbParamsBaseFilter {
    constructor(data?: KalturaThumbParamsFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

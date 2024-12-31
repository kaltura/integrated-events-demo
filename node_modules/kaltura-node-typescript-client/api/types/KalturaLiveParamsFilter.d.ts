import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaLiveParamsBaseFilter, KalturaLiveParamsBaseFilterArgs } from './KalturaLiveParamsBaseFilter';
export interface KalturaLiveParamsFilterArgs extends KalturaLiveParamsBaseFilterArgs {
}
export declare class KalturaLiveParamsFilter extends KalturaLiveParamsBaseFilter {
    constructor(data?: KalturaLiveParamsFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaMediaServerNodeBaseFilter, KalturaMediaServerNodeBaseFilterArgs } from './KalturaMediaServerNodeBaseFilter';
export interface KalturaMediaServerNodeFilterArgs extends KalturaMediaServerNodeBaseFilterArgs {
}
export declare class KalturaMediaServerNodeFilter extends KalturaMediaServerNodeBaseFilter {
    constructor(data?: KalturaMediaServerNodeFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

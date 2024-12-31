import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaServerNodeBaseFilter, KalturaServerNodeBaseFilterArgs } from './KalturaServerNodeBaseFilter';
export interface KalturaServerNodeFilterArgs extends KalturaServerNodeBaseFilterArgs {
}
export declare class KalturaServerNodeFilter extends KalturaServerNodeBaseFilter {
    constructor(data?: KalturaServerNodeFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

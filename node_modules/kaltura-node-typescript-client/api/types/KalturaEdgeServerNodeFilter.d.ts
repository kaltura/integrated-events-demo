import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaEdgeServerNodeBaseFilter, KalturaEdgeServerNodeBaseFilterArgs } from './KalturaEdgeServerNodeBaseFilter';
export interface KalturaEdgeServerNodeFilterArgs extends KalturaEdgeServerNodeBaseFilterArgs {
}
export declare class KalturaEdgeServerNodeFilter extends KalturaEdgeServerNodeBaseFilter {
    constructor(data?: KalturaEdgeServerNodeFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

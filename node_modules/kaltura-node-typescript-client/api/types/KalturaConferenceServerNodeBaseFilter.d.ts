import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaServerNodeFilter, KalturaServerNodeFilterArgs } from './KalturaServerNodeFilter';
export interface KalturaConferenceServerNodeBaseFilterArgs extends KalturaServerNodeFilterArgs {
}
export declare class KalturaConferenceServerNodeBaseFilter extends KalturaServerNodeFilter {
    constructor(data?: KalturaConferenceServerNodeBaseFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

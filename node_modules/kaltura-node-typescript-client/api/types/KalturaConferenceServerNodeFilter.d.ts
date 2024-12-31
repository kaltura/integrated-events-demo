import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaConferenceServerNodeBaseFilter, KalturaConferenceServerNodeBaseFilterArgs } from './KalturaConferenceServerNodeBaseFilter';
export interface KalturaConferenceServerNodeFilterArgs extends KalturaConferenceServerNodeBaseFilterArgs {
}
export declare class KalturaConferenceServerNodeFilter extends KalturaConferenceServerNodeBaseFilter {
    constructor(data?: KalturaConferenceServerNodeFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

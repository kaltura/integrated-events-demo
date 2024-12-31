import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaConferenceEntryServerNodeBaseFilter, KalturaConferenceEntryServerNodeBaseFilterArgs } from './KalturaConferenceEntryServerNodeBaseFilter';
export interface KalturaConferenceEntryServerNodeFilterArgs extends KalturaConferenceEntryServerNodeBaseFilterArgs {
}
export declare class KalturaConferenceEntryServerNodeFilter extends KalturaConferenceEntryServerNodeBaseFilter {
    constructor(data?: KalturaConferenceEntryServerNodeFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

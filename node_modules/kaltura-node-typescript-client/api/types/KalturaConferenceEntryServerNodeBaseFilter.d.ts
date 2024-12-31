import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaEntryServerNodeFilter, KalturaEntryServerNodeFilterArgs } from './KalturaEntryServerNodeFilter';
export interface KalturaConferenceEntryServerNodeBaseFilterArgs extends KalturaEntryServerNodeFilterArgs {
}
export declare class KalturaConferenceEntryServerNodeBaseFilter extends KalturaEntryServerNodeFilter {
    constructor(data?: KalturaConferenceEntryServerNodeBaseFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

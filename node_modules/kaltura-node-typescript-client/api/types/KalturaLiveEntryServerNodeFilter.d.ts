import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaLiveEntryServerNodeBaseFilter, KalturaLiveEntryServerNodeBaseFilterArgs } from './KalturaLiveEntryServerNodeBaseFilter';
export interface KalturaLiveEntryServerNodeFilterArgs extends KalturaLiveEntryServerNodeBaseFilterArgs {
}
export declare class KalturaLiveEntryServerNodeFilter extends KalturaLiveEntryServerNodeBaseFilter {
    constructor(data?: KalturaLiveEntryServerNodeFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

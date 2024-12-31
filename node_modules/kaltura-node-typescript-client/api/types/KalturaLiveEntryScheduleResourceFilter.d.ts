import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaLiveEntryScheduleResourceBaseFilter, KalturaLiveEntryScheduleResourceBaseFilterArgs } from './KalturaLiveEntryScheduleResourceBaseFilter';
export interface KalturaLiveEntryScheduleResourceFilterArgs extends KalturaLiveEntryScheduleResourceBaseFilterArgs {
}
export declare class KalturaLiveEntryScheduleResourceFilter extends KalturaLiveEntryScheduleResourceBaseFilter {
    constructor(data?: KalturaLiveEntryScheduleResourceFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

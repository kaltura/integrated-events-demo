import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaScheduleResourceFilter, KalturaScheduleResourceFilterArgs } from './KalturaScheduleResourceFilter';
export interface KalturaLiveEntryScheduleResourceBaseFilterArgs extends KalturaScheduleResourceFilterArgs {
}
export declare class KalturaLiveEntryScheduleResourceBaseFilter extends KalturaScheduleResourceFilter {
    constructor(data?: KalturaLiveEntryScheduleResourceBaseFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

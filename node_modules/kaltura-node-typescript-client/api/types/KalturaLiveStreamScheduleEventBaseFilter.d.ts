import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaEntryScheduleEventFilter, KalturaEntryScheduleEventFilterArgs } from './KalturaEntryScheduleEventFilter';
export interface KalturaLiveStreamScheduleEventBaseFilterArgs extends KalturaEntryScheduleEventFilterArgs {
}
export declare class KalturaLiveStreamScheduleEventBaseFilter extends KalturaEntryScheduleEventFilter {
    constructor(data?: KalturaLiveStreamScheduleEventBaseFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

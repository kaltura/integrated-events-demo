import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaEntryScheduleEventFilter, KalturaEntryScheduleEventFilterArgs } from './KalturaEntryScheduleEventFilter';
export interface KalturaRecordScheduleEventBaseFilterArgs extends KalturaEntryScheduleEventFilterArgs {
}
export declare class KalturaRecordScheduleEventBaseFilter extends KalturaEntryScheduleEventFilter {
    constructor(data?: KalturaRecordScheduleEventBaseFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

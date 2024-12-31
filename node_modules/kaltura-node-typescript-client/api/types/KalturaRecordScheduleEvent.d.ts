import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaEntryScheduleEvent, KalturaEntryScheduleEventArgs } from './KalturaEntryScheduleEvent';
export interface KalturaRecordScheduleEventArgs extends KalturaEntryScheduleEventArgs {
}
export declare class KalturaRecordScheduleEvent extends KalturaEntryScheduleEvent {
    constructor(data?: KalturaRecordScheduleEventArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

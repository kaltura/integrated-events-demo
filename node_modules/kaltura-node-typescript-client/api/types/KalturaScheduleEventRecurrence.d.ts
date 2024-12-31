import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaScheduleEventRecurrenceFrequency } from './KalturaScheduleEventRecurrenceFrequency';
import { KalturaScheduleEventRecurrenceDay } from './KalturaScheduleEventRecurrenceDay';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';
export interface KalturaScheduleEventRecurrenceArgs extends KalturaObjectBaseArgs {
    name?: string;
    frequency?: KalturaScheduleEventRecurrenceFrequency;
    until?: Date;
    timeZone?: string;
    count?: number;
    interval?: number;
    bySecond?: string;
    byMinute?: string;
    byHour?: string;
    byDay?: string;
    byMonthDay?: string;
    byYearDay?: string;
    byWeekNumber?: string;
    byMonth?: string;
    byOffset?: string;
    weekStartDay?: KalturaScheduleEventRecurrenceDay;
}
export declare class KalturaScheduleEventRecurrence extends KalturaObjectBase {
    name: string;
    frequency: KalturaScheduleEventRecurrenceFrequency;
    until: Date;
    timeZone: string;
    count: number;
    interval: number;
    bySecond: string;
    byMinute: string;
    byHour: string;
    byDay: string;
    byMonthDay: string;
    byYearDay: string;
    byWeekNumber: string;
    byMonth: string;
    byOffset: string;
    weekStartDay: KalturaScheduleEventRecurrenceDay;
    constructor(data?: KalturaScheduleEventRecurrenceArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

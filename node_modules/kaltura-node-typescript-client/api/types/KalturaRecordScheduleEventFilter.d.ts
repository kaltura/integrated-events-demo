import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaRecordScheduleEventBaseFilter, KalturaRecordScheduleEventBaseFilterArgs } from './KalturaRecordScheduleEventBaseFilter';
export interface KalturaRecordScheduleEventFilterArgs extends KalturaRecordScheduleEventBaseFilterArgs {
}
export declare class KalturaRecordScheduleEventFilter extends KalturaRecordScheduleEventBaseFilter {
    constructor(data?: KalturaRecordScheduleEventFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

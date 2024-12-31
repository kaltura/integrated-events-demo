import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaCameraScheduleResourceBaseFilter, KalturaCameraScheduleResourceBaseFilterArgs } from './KalturaCameraScheduleResourceBaseFilter';
export interface KalturaCameraScheduleResourceFilterArgs extends KalturaCameraScheduleResourceBaseFilterArgs {
}
export declare class KalturaCameraScheduleResourceFilter extends KalturaCameraScheduleResourceBaseFilter {
    constructor(data?: KalturaCameraScheduleResourceFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

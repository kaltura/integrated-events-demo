import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaScheduleResourceFilter, KalturaScheduleResourceFilterArgs } from './KalturaScheduleResourceFilter';
export interface KalturaCameraScheduleResourceBaseFilterArgs extends KalturaScheduleResourceFilterArgs {
}
export declare class KalturaCameraScheduleResourceBaseFilter extends KalturaScheduleResourceFilter {
    constructor(data?: KalturaCameraScheduleResourceBaseFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

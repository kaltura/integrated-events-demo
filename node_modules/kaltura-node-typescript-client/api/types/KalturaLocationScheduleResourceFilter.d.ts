import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaLocationScheduleResourceBaseFilter, KalturaLocationScheduleResourceBaseFilterArgs } from './KalturaLocationScheduleResourceBaseFilter';
export interface KalturaLocationScheduleResourceFilterArgs extends KalturaLocationScheduleResourceBaseFilterArgs {
}
export declare class KalturaLocationScheduleResourceFilter extends KalturaLocationScheduleResourceBaseFilter {
    constructor(data?: KalturaLocationScheduleResourceFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

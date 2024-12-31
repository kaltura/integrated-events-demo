import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaScheduleResourceFilter, KalturaScheduleResourceFilterArgs } from './KalturaScheduleResourceFilter';
export interface KalturaLocationScheduleResourceBaseFilterArgs extends KalturaScheduleResourceFilterArgs {
}
export declare class KalturaLocationScheduleResourceBaseFilter extends KalturaScheduleResourceFilter {
    constructor(data?: KalturaLocationScheduleResourceBaseFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

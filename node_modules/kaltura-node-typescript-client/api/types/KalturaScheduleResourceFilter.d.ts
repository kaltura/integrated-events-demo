import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaScheduleResourceBaseFilter, KalturaScheduleResourceBaseFilterArgs } from './KalturaScheduleResourceBaseFilter';
export interface KalturaScheduleResourceFilterArgs extends KalturaScheduleResourceBaseFilterArgs {
}
export declare class KalturaScheduleResourceFilter extends KalturaScheduleResourceBaseFilter {
    constructor(data?: KalturaScheduleResourceFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

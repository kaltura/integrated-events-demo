import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaScheduleEventResourceBaseFilter, KalturaScheduleEventResourceBaseFilterArgs } from './KalturaScheduleEventResourceBaseFilter';
export interface KalturaScheduleEventResourceFilterArgs extends KalturaScheduleEventResourceBaseFilterArgs {
    eventIdOrItsParentIdEqual?: number;
}
export declare class KalturaScheduleEventResourceFilter extends KalturaScheduleEventResourceBaseFilter {
    eventIdOrItsParentIdEqual: number;
    constructor(data?: KalturaScheduleEventResourceFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

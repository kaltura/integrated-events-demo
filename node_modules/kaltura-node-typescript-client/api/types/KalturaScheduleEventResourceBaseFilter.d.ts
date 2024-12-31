import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaRelatedFilter, KalturaRelatedFilterArgs } from './KalturaRelatedFilter';
export interface KalturaScheduleEventResourceBaseFilterArgs extends KalturaRelatedFilterArgs {
    eventIdEqual?: number;
    eventIdIn?: string;
    resourceIdEqual?: number;
    resourceIdIn?: string;
    createdAtGreaterThanOrEqual?: Date;
    createdAtLessThanOrEqual?: Date;
    updatedAtGreaterThanOrEqual?: Date;
    updatedAtLessThanOrEqual?: Date;
}
export declare class KalturaScheduleEventResourceBaseFilter extends KalturaRelatedFilter {
    eventIdEqual: number;
    eventIdIn: string;
    resourceIdEqual: number;
    resourceIdIn: string;
    createdAtGreaterThanOrEqual: Date;
    createdAtLessThanOrEqual: Date;
    updatedAtGreaterThanOrEqual: Date;
    updatedAtLessThanOrEqual: Date;
    constructor(data?: KalturaScheduleEventResourceBaseFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

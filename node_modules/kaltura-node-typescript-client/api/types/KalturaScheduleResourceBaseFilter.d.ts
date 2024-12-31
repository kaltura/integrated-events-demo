import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaScheduleResourceStatus } from './KalturaScheduleResourceStatus';
import { KalturaRelatedFilter, KalturaRelatedFilterArgs } from './KalturaRelatedFilter';
export interface KalturaScheduleResourceBaseFilterArgs extends KalturaRelatedFilterArgs {
    idEqual?: number;
    idIn?: string;
    idNotIn?: string;
    parentIdEqual?: number;
    parentIdIn?: string;
    nameEqual?: string;
    systemNameEqual?: string;
    systemNameIn?: string;
    statusEqual?: KalturaScheduleResourceStatus;
    statusIn?: string;
    tagsLike?: string;
    tagsMultiLikeOr?: string;
    tagsMultiLikeAnd?: string;
    createdAtGreaterThanOrEqual?: Date;
    createdAtLessThanOrEqual?: Date;
    updatedAtGreaterThanOrEqual?: Date;
    updatedAtLessThanOrEqual?: Date;
}
export declare class KalturaScheduleResourceBaseFilter extends KalturaRelatedFilter {
    idEqual: number;
    idIn: string;
    idNotIn: string;
    parentIdEqual: number;
    parentIdIn: string;
    nameEqual: string;
    systemNameEqual: string;
    systemNameIn: string;
    statusEqual: KalturaScheduleResourceStatus;
    statusIn: string;
    tagsLike: string;
    tagsMultiLikeOr: string;
    tagsMultiLikeAnd: string;
    createdAtGreaterThanOrEqual: Date;
    createdAtLessThanOrEqual: Date;
    updatedAtGreaterThanOrEqual: Date;
    updatedAtLessThanOrEqual: Date;
    constructor(data?: KalturaScheduleResourceBaseFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

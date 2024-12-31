import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaUserRoleStatus } from './KalturaUserRoleStatus';
import { KalturaRelatedFilter, KalturaRelatedFilterArgs } from './KalturaRelatedFilter';
export interface KalturaUserRoleBaseFilterArgs extends KalturaRelatedFilterArgs {
    idEqual?: number;
    idIn?: string;
    nameEqual?: string;
    nameIn?: string;
    systemNameEqual?: string;
    systemNameIn?: string;
    descriptionLike?: string;
    statusEqual?: KalturaUserRoleStatus;
    statusIn?: string;
    partnerIdEqual?: number;
    partnerIdIn?: string;
    tagsMultiLikeOr?: string;
    tagsMultiLikeAnd?: string;
    createdAtGreaterThanOrEqual?: Date;
    createdAtLessThanOrEqual?: Date;
    updatedAtGreaterThanOrEqual?: Date;
    updatedAtLessThanOrEqual?: Date;
}
export declare class KalturaUserRoleBaseFilter extends KalturaRelatedFilter {
    idEqual: number;
    idIn: string;
    nameEqual: string;
    nameIn: string;
    systemNameEqual: string;
    systemNameIn: string;
    descriptionLike: string;
    statusEqual: KalturaUserRoleStatus;
    statusIn: string;
    partnerIdEqual: number;
    partnerIdIn: string;
    tagsMultiLikeOr: string;
    tagsMultiLikeAnd: string;
    createdAtGreaterThanOrEqual: Date;
    createdAtLessThanOrEqual: Date;
    updatedAtGreaterThanOrEqual: Date;
    updatedAtLessThanOrEqual: Date;
    constructor(data?: KalturaUserRoleBaseFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

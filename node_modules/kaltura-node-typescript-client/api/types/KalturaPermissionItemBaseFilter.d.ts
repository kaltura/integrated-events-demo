import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaPermissionItemType } from './KalturaPermissionItemType';
import { KalturaRelatedFilter, KalturaRelatedFilterArgs } from './KalturaRelatedFilter';
export interface KalturaPermissionItemBaseFilterArgs extends KalturaRelatedFilterArgs {
    idEqual?: number;
    idIn?: string;
    typeEqual?: KalturaPermissionItemType;
    typeIn?: string;
    partnerIdEqual?: number;
    partnerIdIn?: string;
    tagsMultiLikeOr?: string;
    tagsMultiLikeAnd?: string;
    createdAtGreaterThanOrEqual?: Date;
    createdAtLessThanOrEqual?: Date;
    updatedAtGreaterThanOrEqual?: Date;
    updatedAtLessThanOrEqual?: Date;
}
export declare class KalturaPermissionItemBaseFilter extends KalturaRelatedFilter {
    idEqual: number;
    idIn: string;
    typeEqual: KalturaPermissionItemType;
    typeIn: string;
    partnerIdEqual: number;
    partnerIdIn: string;
    tagsMultiLikeOr: string;
    tagsMultiLikeAnd: string;
    createdAtGreaterThanOrEqual: Date;
    createdAtLessThanOrEqual: Date;
    updatedAtGreaterThanOrEqual: Date;
    updatedAtLessThanOrEqual: Date;
    constructor(data?: KalturaPermissionItemBaseFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

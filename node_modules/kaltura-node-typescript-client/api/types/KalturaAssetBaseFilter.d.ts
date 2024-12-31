import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaRelatedFilter, KalturaRelatedFilterArgs } from './KalturaRelatedFilter';
export interface KalturaAssetBaseFilterArgs extends KalturaRelatedFilterArgs {
    idEqual?: string;
    idIn?: string;
    entryIdEqual?: string;
    entryIdIn?: string;
    partnerIdEqual?: number;
    partnerIdIn?: string;
    sizeGreaterThanOrEqual?: number;
    sizeLessThanOrEqual?: number;
    tagsLike?: string;
    tagsMultiLikeOr?: string;
    tagsMultiLikeAnd?: string;
    createdAtGreaterThanOrEqual?: Date;
    createdAtLessThanOrEqual?: Date;
    updatedAtGreaterThanOrEqual?: Date;
    updatedAtLessThanOrEqual?: Date;
    deletedAtGreaterThanOrEqual?: Date;
    deletedAtLessThanOrEqual?: Date;
}
export declare class KalturaAssetBaseFilter extends KalturaRelatedFilter {
    idEqual: string;
    idIn: string;
    entryIdEqual: string;
    entryIdIn: string;
    partnerIdEqual: number;
    partnerIdIn: string;
    sizeGreaterThanOrEqual: number;
    sizeLessThanOrEqual: number;
    tagsLike: string;
    tagsMultiLikeOr: string;
    tagsMultiLikeAnd: string;
    createdAtGreaterThanOrEqual: Date;
    createdAtLessThanOrEqual: Date;
    updatedAtGreaterThanOrEqual: Date;
    updatedAtLessThanOrEqual: Date;
    deletedAtGreaterThanOrEqual: Date;
    deletedAtLessThanOrEqual: Date;
    constructor(data?: KalturaAssetBaseFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaCategoryEntryStatus } from './KalturaCategoryEntryStatus';
import { KalturaRelatedFilter, KalturaRelatedFilterArgs } from './KalturaRelatedFilter';
export interface KalturaCategoryEntryBaseFilterArgs extends KalturaRelatedFilterArgs {
    categoryIdEqual?: number;
    categoryIdIn?: string;
    entryIdEqual?: string;
    entryIdIn?: string;
    createdAtGreaterThanOrEqual?: Date;
    createdAtLessThanOrEqual?: Date;
    categoryFullIdsStartsWith?: string;
    statusEqual?: KalturaCategoryEntryStatus;
    statusIn?: string;
    creatorUserIdEqual?: string;
    creatorUserIdIn?: string;
}
export declare class KalturaCategoryEntryBaseFilter extends KalturaRelatedFilter {
    categoryIdEqual: number;
    categoryIdIn: string;
    entryIdEqual: string;
    entryIdIn: string;
    createdAtGreaterThanOrEqual: Date;
    createdAtLessThanOrEqual: Date;
    categoryFullIdsStartsWith: string;
    statusEqual: KalturaCategoryEntryStatus;
    statusIn: string;
    creatorUserIdEqual: string;
    creatorUserIdIn: string;
    constructor(data?: KalturaCategoryEntryBaseFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

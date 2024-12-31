import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaUserEntryStatus } from './KalturaUserEntryStatus';
import { KalturaUserEntryType } from './KalturaUserEntryType';
import { KalturaUserEntryExtendedStatus } from './KalturaUserEntryExtendedStatus';
import { KalturaRelatedFilter, KalturaRelatedFilterArgs } from './KalturaRelatedFilter';
export interface KalturaUserEntryBaseFilterArgs extends KalturaRelatedFilterArgs {
    idEqual?: number;
    idIn?: string;
    idNotIn?: string;
    entryIdEqual?: string;
    entryIdIn?: string;
    entryIdNotIn?: string;
    userIdEqual?: string;
    userIdIn?: string;
    userIdNotIn?: string;
    statusEqual?: KalturaUserEntryStatus;
    createdAtLessThanOrEqual?: Date;
    createdAtGreaterThanOrEqual?: Date;
    updatedAtLessThanOrEqual?: Date;
    updatedAtGreaterThanOrEqual?: Date;
    typeEqual?: KalturaUserEntryType;
    extendedStatusEqual?: KalturaUserEntryExtendedStatus;
    extendedStatusIn?: string;
    extendedStatusNotIn?: string;
}
export declare class KalturaUserEntryBaseFilter extends KalturaRelatedFilter {
    idEqual: number;
    idIn: string;
    idNotIn: string;
    entryIdEqual: string;
    entryIdIn: string;
    entryIdNotIn: string;
    userIdEqual: string;
    userIdIn: string;
    userIdNotIn: string;
    statusEqual: KalturaUserEntryStatus;
    createdAtLessThanOrEqual: Date;
    createdAtGreaterThanOrEqual: Date;
    updatedAtLessThanOrEqual: Date;
    updatedAtGreaterThanOrEqual: Date;
    typeEqual: KalturaUserEntryType;
    extendedStatusEqual: KalturaUserEntryExtendedStatus;
    extendedStatusIn: string;
    extendedStatusNotIn: string;
    constructor(data?: KalturaUserEntryBaseFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

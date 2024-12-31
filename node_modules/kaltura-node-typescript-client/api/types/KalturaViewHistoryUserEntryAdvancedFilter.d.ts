import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaUserEntryExtendedStatus } from './KalturaUserEntryExtendedStatus';
import { KalturaSearchItem, KalturaSearchItemArgs } from './KalturaSearchItem';
export interface KalturaViewHistoryUserEntryAdvancedFilterArgs extends KalturaSearchItemArgs {
    idEqual?: string;
    idIn?: string;
    userIdEqual?: string;
    userIdIn?: string;
    updatedAtGreaterThanOrEqual?: string;
    updatedAtLessThanOrEqual?: string;
    extendedStatusEqual?: KalturaUserEntryExtendedStatus;
    extendedStatusIn?: string;
}
export declare class KalturaViewHistoryUserEntryAdvancedFilter extends KalturaSearchItem {
    idEqual: string;
    idIn: string;
    userIdEqual: string;
    userIdIn: string;
    updatedAtGreaterThanOrEqual: string;
    updatedAtLessThanOrEqual: string;
    extendedStatusEqual: KalturaUserEntryExtendedStatus;
    extendedStatusIn: string;
    constructor(data?: KalturaViewHistoryUserEntryAdvancedFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaESearchCategoryEntryFieldName } from './KalturaESearchCategoryEntryFieldName';
import { KalturaCategoryEntryStatus } from './KalturaCategoryEntryStatus';
import { KalturaESearchAbstractEntryItem, KalturaESearchAbstractEntryItemArgs } from './KalturaESearchAbstractEntryItem';
export interface KalturaESearchCategoryEntryItemArgs extends KalturaESearchAbstractEntryItemArgs {
    fieldName?: KalturaESearchCategoryEntryFieldName;
    categoryEntryStatus?: KalturaCategoryEntryStatus;
}
export declare class KalturaESearchCategoryEntryItem extends KalturaESearchAbstractEntryItem {
    fieldName: KalturaESearchCategoryEntryFieldName;
    categoryEntryStatus: KalturaCategoryEntryStatus;
    constructor(data?: KalturaESearchCategoryEntryItemArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

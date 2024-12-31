import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaCategoryEntryAdvancedOrderBy } from './KalturaCategoryEntryAdvancedOrderBy';
import { KalturaSearchItem, KalturaSearchItemArgs } from './KalturaSearchItem';
export interface KalturaCategoryEntryAdvancedFilterArgs extends KalturaSearchItemArgs {
    categoriesMatchOr?: string;
    categoryEntryStatusIn?: string;
    orderBy?: KalturaCategoryEntryAdvancedOrderBy;
    categoryIdEqual?: number;
}
export declare class KalturaCategoryEntryAdvancedFilter extends KalturaSearchItem {
    categoriesMatchOr: string;
    categoryEntryStatusIn: string;
    orderBy: KalturaCategoryEntryAdvancedOrderBy;
    categoryIdEqual: number;
    constructor(data?: KalturaCategoryEntryAdvancedFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

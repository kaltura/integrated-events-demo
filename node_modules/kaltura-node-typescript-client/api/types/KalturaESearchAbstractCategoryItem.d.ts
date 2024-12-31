import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaESearchItemType } from './KalturaESearchItemType';
import { KalturaESearchRange } from './KalturaESearchRange';
import { KalturaESearchCategoryBaseItem, KalturaESearchCategoryBaseItemArgs } from './KalturaESearchCategoryBaseItem';
export interface KalturaESearchAbstractCategoryItemArgs extends KalturaESearchCategoryBaseItemArgs {
    searchTerm?: string;
    itemType?: KalturaESearchItemType;
    range?: KalturaESearchRange;
    addHighlight?: boolean;
}
export declare class KalturaESearchAbstractCategoryItem extends KalturaESearchCategoryBaseItem {
    searchTerm: string;
    itemType: KalturaESearchItemType;
    range: KalturaESearchRange;
    addHighlight: boolean;
    constructor(data?: KalturaESearchAbstractCategoryItemArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

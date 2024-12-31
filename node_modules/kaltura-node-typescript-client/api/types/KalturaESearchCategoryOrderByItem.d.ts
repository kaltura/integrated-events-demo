import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaESearchCategoryOrderByFieldName } from './KalturaESearchCategoryOrderByFieldName';
import { KalturaESearchOrderByItem, KalturaESearchOrderByItemArgs } from './KalturaESearchOrderByItem';
export interface KalturaESearchCategoryOrderByItemArgs extends KalturaESearchOrderByItemArgs {
    sortField?: KalturaESearchCategoryOrderByFieldName;
}
export declare class KalturaESearchCategoryOrderByItem extends KalturaESearchOrderByItem {
    sortField: KalturaESearchCategoryOrderByFieldName;
    constructor(data?: KalturaESearchCategoryOrderByItemArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaESearchCategoryFieldName } from './KalturaESearchCategoryFieldName';
import { KalturaESearchAbstractCategoryItem, KalturaESearchAbstractCategoryItemArgs } from './KalturaESearchAbstractCategoryItem';
export interface KalturaESearchCategoryItemArgs extends KalturaESearchAbstractCategoryItemArgs {
    fieldName?: KalturaESearchCategoryFieldName;
}
export declare class KalturaESearchCategoryItem extends KalturaESearchAbstractCategoryItem {
    fieldName: KalturaESearchCategoryFieldName;
    constructor(data?: KalturaESearchCategoryItemArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

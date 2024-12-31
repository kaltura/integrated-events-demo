import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaESearchOperatorType } from './KalturaESearchOperatorType';
import { KalturaESearchCategoryBaseItem, KalturaESearchCategoryBaseItemArgs } from './KalturaESearchCategoryBaseItem';
export interface KalturaESearchCategoryOperatorArgs extends KalturaESearchCategoryBaseItemArgs {
    operator?: KalturaESearchOperatorType;
    searchItems?: KalturaESearchCategoryBaseItem[];
}
export declare class KalturaESearchCategoryOperator extends KalturaESearchCategoryBaseItem {
    operator: KalturaESearchOperatorType;
    searchItems: KalturaESearchCategoryBaseItem[];
    constructor(data?: KalturaESearchCategoryOperatorArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

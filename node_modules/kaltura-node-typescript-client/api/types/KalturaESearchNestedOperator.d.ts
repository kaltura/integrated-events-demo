import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaESearchOperatorType } from './KalturaESearchOperatorType';
import { KalturaESearchEntryNestedBaseItem, KalturaESearchEntryNestedBaseItemArgs } from './KalturaESearchEntryNestedBaseItem';
export interface KalturaESearchNestedOperatorArgs extends KalturaESearchEntryNestedBaseItemArgs {
    operator?: KalturaESearchOperatorType;
    searchItems?: KalturaESearchEntryNestedBaseItem[];
}
export declare class KalturaESearchNestedOperator extends KalturaESearchEntryNestedBaseItem {
    operator: KalturaESearchOperatorType;
    searchItems: KalturaESearchEntryNestedBaseItem[];
    constructor(data?: KalturaESearchNestedOperatorArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

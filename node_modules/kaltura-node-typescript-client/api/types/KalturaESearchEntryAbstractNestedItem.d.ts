import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaESearchItemType } from './KalturaESearchItemType';
import { KalturaESearchRange } from './KalturaESearchRange';
import { KalturaESearchEntryNestedBaseItem, KalturaESearchEntryNestedBaseItemArgs } from './KalturaESearchEntryNestedBaseItem';
export interface KalturaESearchEntryAbstractNestedItemArgs extends KalturaESearchEntryNestedBaseItemArgs {
    searchTerm?: string;
    itemType?: KalturaESearchItemType;
    range?: KalturaESearchRange;
    addHighlight?: boolean;
}
export declare class KalturaESearchEntryAbstractNestedItem extends KalturaESearchEntryNestedBaseItem {
    searchTerm: string;
    itemType: KalturaESearchItemType;
    range: KalturaESearchRange;
    addHighlight: boolean;
    constructor(data?: KalturaESearchEntryAbstractNestedItemArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

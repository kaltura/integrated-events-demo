import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaESearchItemType } from './KalturaESearchItemType';
import { KalturaESearchRange } from './KalturaESearchRange';
import { KalturaESearchEntryBaseItem, KalturaESearchEntryBaseItemArgs } from './KalturaESearchEntryBaseItem';
export interface KalturaESearchAbstractEntryItemArgs extends KalturaESearchEntryBaseItemArgs {
    searchTerm?: string;
    itemType?: KalturaESearchItemType;
    range?: KalturaESearchRange;
    addHighlight?: boolean;
}
export declare class KalturaESearchAbstractEntryItem extends KalturaESearchEntryBaseItem {
    searchTerm: string;
    itemType: KalturaESearchItemType;
    range: KalturaESearchRange;
    addHighlight: boolean;
    constructor(data?: KalturaESearchAbstractEntryItemArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

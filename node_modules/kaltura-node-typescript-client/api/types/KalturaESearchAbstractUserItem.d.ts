import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaESearchItemType } from './KalturaESearchItemType';
import { KalturaESearchRange } from './KalturaESearchRange';
import { KalturaESearchUserBaseItem, KalturaESearchUserBaseItemArgs } from './KalturaESearchUserBaseItem';
export interface KalturaESearchAbstractUserItemArgs extends KalturaESearchUserBaseItemArgs {
    searchTerm?: string;
    itemType?: KalturaESearchItemType;
    range?: KalturaESearchRange;
    addHighlight?: boolean;
}
export declare class KalturaESearchAbstractUserItem extends KalturaESearchUserBaseItem {
    searchTerm: string;
    itemType: KalturaESearchItemType;
    range: KalturaESearchRange;
    addHighlight: boolean;
    constructor(data?: KalturaESearchAbstractUserItemArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

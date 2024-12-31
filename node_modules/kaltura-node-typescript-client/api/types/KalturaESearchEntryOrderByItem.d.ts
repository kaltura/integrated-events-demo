import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaESearchEntryOrderByFieldName } from './KalturaESearchEntryOrderByFieldName';
import { KalturaESearchOrderByItem, KalturaESearchOrderByItemArgs } from './KalturaESearchOrderByItem';
export interface KalturaESearchEntryOrderByItemArgs extends KalturaESearchOrderByItemArgs {
    sortField?: KalturaESearchEntryOrderByFieldName;
}
export declare class KalturaESearchEntryOrderByItem extends KalturaESearchOrderByItem {
    sortField: KalturaESearchEntryOrderByFieldName;
    constructor(data?: KalturaESearchEntryOrderByItemArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

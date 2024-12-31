import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaESearchEntryFieldName } from './KalturaESearchEntryFieldName';
import { KalturaESearchAbstractEntryItem, KalturaESearchAbstractEntryItemArgs } from './KalturaESearchAbstractEntryItem';
export interface KalturaESearchEntryItemArgs extends KalturaESearchAbstractEntryItemArgs {
    fieldName?: KalturaESearchEntryFieldName;
}
export declare class KalturaESearchEntryItem extends KalturaESearchAbstractEntryItem {
    fieldName: KalturaESearchEntryFieldName;
    constructor(data?: KalturaESearchEntryItemArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

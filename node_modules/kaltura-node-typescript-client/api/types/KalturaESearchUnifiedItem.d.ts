import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaESearchAbstractEntryItem, KalturaESearchAbstractEntryItemArgs } from './KalturaESearchAbstractEntryItem';
export interface KalturaESearchUnifiedItemArgs extends KalturaESearchAbstractEntryItemArgs {
}
export declare class KalturaESearchUnifiedItem extends KalturaESearchAbstractEntryItem {
    constructor(data?: KalturaESearchUnifiedItemArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

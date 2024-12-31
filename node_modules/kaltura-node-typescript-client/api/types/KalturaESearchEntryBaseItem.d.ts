import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaESearchBaseItem, KalturaESearchBaseItemArgs } from './KalturaESearchBaseItem';
export interface KalturaESearchEntryBaseItemArgs extends KalturaESearchBaseItemArgs {
}
export declare class KalturaESearchEntryBaseItem extends KalturaESearchBaseItem {
    constructor(data?: KalturaESearchEntryBaseItemArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

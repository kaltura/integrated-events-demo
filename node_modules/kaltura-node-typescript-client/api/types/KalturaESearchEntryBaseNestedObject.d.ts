import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaESearchEntryBaseItem, KalturaESearchEntryBaseItemArgs } from './KalturaESearchEntryBaseItem';
export interface KalturaESearchEntryBaseNestedObjectArgs extends KalturaESearchEntryBaseItemArgs {
}
export declare class KalturaESearchEntryBaseNestedObject extends KalturaESearchEntryBaseItem {
    constructor(data?: KalturaESearchEntryBaseNestedObjectArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

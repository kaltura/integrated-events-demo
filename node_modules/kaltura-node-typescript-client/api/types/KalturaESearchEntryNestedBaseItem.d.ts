import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaESearchEntryBaseNestedObject, KalturaESearchEntryBaseNestedObjectArgs } from './KalturaESearchEntryBaseNestedObject';
export interface KalturaESearchEntryNestedBaseItemArgs extends KalturaESearchEntryBaseNestedObjectArgs {
}
export declare class KalturaESearchEntryNestedBaseItem extends KalturaESearchEntryBaseNestedObject {
    constructor(data?: KalturaESearchEntryNestedBaseItemArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

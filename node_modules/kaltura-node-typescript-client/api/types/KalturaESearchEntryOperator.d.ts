import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaESearchOperatorType } from './KalturaESearchOperatorType';
import { KalturaESearchEntryBaseItem, KalturaESearchEntryBaseItemArgs } from './KalturaESearchEntryBaseItem';
export interface KalturaESearchEntryOperatorArgs extends KalturaESearchEntryBaseItemArgs {
    operator?: KalturaESearchOperatorType;
    searchItems?: KalturaESearchEntryBaseItem[];
}
export declare class KalturaESearchEntryOperator extends KalturaESearchEntryBaseItem {
    operator: KalturaESearchOperatorType;
    searchItems: KalturaESearchEntryBaseItem[];
    constructor(data?: KalturaESearchEntryOperatorArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

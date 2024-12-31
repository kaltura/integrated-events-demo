import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaESearchCuePointFieldName } from './KalturaESearchCuePointFieldName';
import { KalturaESearchEntryAbstractNestedItem, KalturaESearchEntryAbstractNestedItemArgs } from './KalturaESearchEntryAbstractNestedItem';
export interface KalturaESearchCuePointItemArgs extends KalturaESearchEntryAbstractNestedItemArgs {
    fieldName?: KalturaESearchCuePointFieldName;
}
export declare class KalturaESearchCuePointItem extends KalturaESearchEntryAbstractNestedItem {
    fieldName: KalturaESearchCuePointFieldName;
    constructor(data?: KalturaESearchCuePointItemArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

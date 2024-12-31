import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaESearchCaptionFieldName } from './KalturaESearchCaptionFieldName';
import { KalturaESearchEntryAbstractNestedItem, KalturaESearchEntryAbstractNestedItemArgs } from './KalturaESearchEntryAbstractNestedItem';
export interface KalturaESearchCaptionItemArgs extends KalturaESearchEntryAbstractNestedItemArgs {
    fieldName?: KalturaESearchCaptionFieldName;
}
export declare class KalturaESearchCaptionItem extends KalturaESearchEntryAbstractNestedItem {
    fieldName: KalturaESearchCaptionFieldName;
    constructor(data?: KalturaESearchCaptionItemArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

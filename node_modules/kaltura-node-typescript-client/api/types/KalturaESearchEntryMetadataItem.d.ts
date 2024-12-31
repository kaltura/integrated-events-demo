import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaESearchEntryAbstractNestedItem, KalturaESearchEntryAbstractNestedItemArgs } from './KalturaESearchEntryAbstractNestedItem';
export interface KalturaESearchEntryMetadataItemArgs extends KalturaESearchEntryAbstractNestedItemArgs {
    xpath?: string;
    metadataProfileId?: number;
    metadataFieldId?: number;
}
export declare class KalturaESearchEntryMetadataItem extends KalturaESearchEntryAbstractNestedItem {
    xpath: string;
    metadataProfileId: number;
    metadataFieldId: number;
    constructor(data?: KalturaESearchEntryMetadataItemArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaESearchItemData, KalturaESearchItemDataArgs } from './KalturaESearchItemData';
export interface KalturaESearchMetadataItemDataArgs extends KalturaESearchItemDataArgs {
    xpath?: string;
    metadataProfileId?: number;
    metadataFieldId?: number;
    valueText?: string;
    valueInt?: number;
}
export declare class KalturaESearchMetadataItemData extends KalturaESearchItemData {
    xpath: string;
    metadataProfileId: number;
    metadataFieldId: number;
    valueText: string;
    valueInt: number;
    constructor(data?: KalturaESearchMetadataItemDataArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaESearchAbstractCategoryItem, KalturaESearchAbstractCategoryItemArgs } from './KalturaESearchAbstractCategoryItem';
export interface KalturaESearchCategoryMetadataItemArgs extends KalturaESearchAbstractCategoryItemArgs {
    xpath?: string;
    metadataProfileId?: number;
    metadataFieldId?: number;
}
export declare class KalturaESearchCategoryMetadataItem extends KalturaESearchAbstractCategoryItem {
    xpath: string;
    metadataProfileId: number;
    metadataFieldId: number;
    constructor(data?: KalturaESearchCategoryMetadataItemArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

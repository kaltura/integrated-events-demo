import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaESearchAbstractUserItem, KalturaESearchAbstractUserItemArgs } from './KalturaESearchAbstractUserItem';
export interface KalturaESearchUserMetadataItemArgs extends KalturaESearchAbstractUserItemArgs {
    xpath?: string;
    metadataProfileId?: number;
    metadataFieldId?: number;
}
export declare class KalturaESearchUserMetadataItem extends KalturaESearchAbstractUserItem {
    xpath: string;
    metadataProfileId: number;
    metadataFieldId: number;
    constructor(data?: KalturaESearchUserMetadataItemArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaESearchOrderByItem, KalturaESearchOrderByItemArgs } from './KalturaESearchOrderByItem';
export interface KalturaESearchMetadataOrderByItemArgs extends KalturaESearchOrderByItemArgs {
    xpath?: string;
    metadataProfileId?: number;
}
export declare class KalturaESearchMetadataOrderByItem extends KalturaESearchOrderByItem {
    xpath: string;
    metadataProfileId: number;
    constructor(data?: KalturaESearchMetadataOrderByItemArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

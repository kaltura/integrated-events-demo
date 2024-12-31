import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaFeedItemInfo } from './KalturaFeedItemInfo';
import { KalturaDropFolder, KalturaDropFolderArgs } from './KalturaDropFolder';
export interface KalturaFeedDropFolderArgs extends KalturaDropFolderArgs {
    itemHandlingLimit?: number;
    feedItemInfo?: KalturaFeedItemInfo;
}
export declare class KalturaFeedDropFolder extends KalturaDropFolder {
    itemHandlingLimit: number;
    feedItemInfo: KalturaFeedItemInfo;
    constructor(data?: KalturaFeedDropFolderArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

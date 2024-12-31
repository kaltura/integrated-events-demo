import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDropFolderFile, KalturaDropFolderFileArgs } from './KalturaDropFolderFile';
export interface KalturaFeedDropFolderFileArgs extends KalturaDropFolderFileArgs {
    hash?: string;
    feedXmlPath?: string;
}
export declare class KalturaFeedDropFolderFile extends KalturaDropFolderFile {
    hash: string;
    feedXmlPath: string;
    constructor(data?: KalturaFeedDropFolderFileArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

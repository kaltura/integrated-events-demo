import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDropFolderFile, KalturaDropFolderFileArgs } from './KalturaDropFolderFile';
export interface KalturaWebexDropFolderFileArgs extends KalturaDropFolderFileArgs {
    recordingId?: number;
    webexHostId?: string;
    description?: string;
    confId?: string;
    contentUrl?: string;
}
export declare class KalturaWebexDropFolderFile extends KalturaDropFolderFile {
    recordingId: number;
    webexHostId: string;
    description: string;
    confId: string;
    contentUrl: string;
    constructor(data?: KalturaWebexDropFolderFileArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

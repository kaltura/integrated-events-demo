import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDropFolderContentFileHandlerMatchPolicy } from './KalturaDropFolderContentFileHandlerMatchPolicy';
import { KalturaJobData, KalturaJobDataArgs } from './KalturaJobData';
export interface KalturaDropFolderContentProcessorJobDataArgs extends KalturaJobDataArgs {
    dropFolderId?: number;
    dropFolderFileIds?: string;
    parsedSlug?: string;
    contentMatchPolicy?: KalturaDropFolderContentFileHandlerMatchPolicy;
    conversionProfileId?: number;
    parsedUserId?: string;
}
export declare class KalturaDropFolderContentProcessorJobData extends KalturaJobData {
    dropFolderId: number;
    dropFolderFileIds: string;
    parsedSlug: string;
    contentMatchPolicy: KalturaDropFolderContentFileHandlerMatchPolicy;
    conversionProfileId: number;
    parsedUserId: string;
    constructor(data?: KalturaDropFolderContentProcessorJobDataArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

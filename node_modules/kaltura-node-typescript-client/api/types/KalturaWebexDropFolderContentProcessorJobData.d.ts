import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDropFolderContentProcessorJobData, KalturaDropFolderContentProcessorJobDataArgs } from './KalturaDropFolderContentProcessorJobData';
export interface KalturaWebexDropFolderContentProcessorJobDataArgs extends KalturaDropFolderContentProcessorJobDataArgs {
    description?: string;
    webexHostId?: string;
}
export declare class KalturaWebexDropFolderContentProcessorJobData extends KalturaDropFolderContentProcessorJobData {
    description: string;
    webexHostId: string;
    constructor(data?: KalturaWebexDropFolderContentProcessorJobDataArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaSshImportJobData, KalturaSshImportJobDataArgs } from './KalturaSshImportJobData';
export interface KalturaDropFolderImportJobDataArgs extends KalturaSshImportJobDataArgs {
    dropFolderFileId?: number;
}
export declare class KalturaDropFolderImportJobData extends KalturaSshImportJobData {
    dropFolderFileId: number;
    constructor(data?: KalturaDropFolderImportJobDataArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

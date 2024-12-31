import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDropFolderFileHandlerConfig, KalturaDropFolderFileHandlerConfigArgs } from './KalturaDropFolderFileHandlerConfig';
export interface KalturaDropFolderXmlBulkUploadFileHandlerConfigArgs extends KalturaDropFolderFileHandlerConfigArgs {
}
export declare class KalturaDropFolderXmlBulkUploadFileHandlerConfig extends KalturaDropFolderFileHandlerConfig {
    constructor(data?: KalturaDropFolderXmlBulkUploadFileHandlerConfigArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

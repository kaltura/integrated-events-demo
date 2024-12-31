import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaScheduleEventType } from './KalturaScheduleEventType';
import { KalturaDropFolderFileHandlerConfig, KalturaDropFolderFileHandlerConfigArgs } from './KalturaDropFolderFileHandlerConfig';
export interface KalturaDropFolderICalBulkUploadFileHandlerConfigArgs extends KalturaDropFolderFileHandlerConfigArgs {
    eventsType?: KalturaScheduleEventType;
}
export declare class KalturaDropFolderICalBulkUploadFileHandlerConfig extends KalturaDropFolderFileHandlerConfig {
    eventsType: KalturaScheduleEventType;
    constructor(data?: KalturaDropFolderICalBulkUploadFileHandlerConfigArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

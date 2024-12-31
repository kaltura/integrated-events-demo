import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaStorageExportJobData, KalturaStorageExportJobDataArgs } from './KalturaStorageExportJobData';
export interface KalturaKontikiStorageExportJobDataArgs extends KalturaStorageExportJobDataArgs {
    flavorAssetId?: string;
    contentMoid?: string;
    serviceToken?: string;
}
export declare class KalturaKontikiStorageExportJobData extends KalturaStorageExportJobData {
    flavorAssetId: string;
    contentMoid: string;
    serviceToken: string;
    constructor(data?: KalturaKontikiStorageExportJobDataArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

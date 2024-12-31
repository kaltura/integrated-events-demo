import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaAmazonS3StorageProfileFilesPermissionLevel } from './KalturaAmazonS3StorageProfileFilesPermissionLevel';
import { KalturaStorageProfile, KalturaStorageProfileArgs } from './KalturaStorageProfile';
export interface KalturaAmazonS3StorageProfileArgs extends KalturaStorageProfileArgs {
    filesPermissionInS3?: KalturaAmazonS3StorageProfileFilesPermissionLevel;
    s3Region?: string;
    sseType?: string;
    sseKmsKeyId?: string;
    signatureType?: string;
    endPoint?: string;
}
export declare class KalturaAmazonS3StorageProfile extends KalturaStorageProfile {
    filesPermissionInS3: KalturaAmazonS3StorageProfileFilesPermissionLevel;
    s3Region: string;
    sseType: string;
    sseKmsKeyId: string;
    signatureType: string;
    endPoint: string;
    constructor(data?: KalturaAmazonS3StorageProfileArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

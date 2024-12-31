import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaStorageProfileFilter, KalturaStorageProfileFilterArgs } from './KalturaStorageProfileFilter';
export interface KalturaAmazonS3StorageProfileBaseFilterArgs extends KalturaStorageProfileFilterArgs {
}
export declare class KalturaAmazonS3StorageProfileBaseFilter extends KalturaStorageProfileFilter {
    constructor(data?: KalturaAmazonS3StorageProfileBaseFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

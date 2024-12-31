import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaAmazonS3StorageProfileBaseFilter, KalturaAmazonS3StorageProfileBaseFilterArgs } from './KalturaAmazonS3StorageProfileBaseFilter';
export interface KalturaAmazonS3StorageProfileFilterArgs extends KalturaAmazonS3StorageProfileBaseFilterArgs {
}
export declare class KalturaAmazonS3StorageProfileFilter extends KalturaAmazonS3StorageProfileBaseFilter {
    constructor(data?: KalturaAmazonS3StorageProfileFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaFreewheelDistributionAssetPath } from './KalturaFreewheelDistributionAssetPath';
import { KalturaDistributionJobProviderData, KalturaDistributionJobProviderDataArgs } from './KalturaDistributionJobProviderData';
export interface KalturaFreewheelDistributionJobProviderDataArgs extends KalturaDistributionJobProviderDataArgs {
    videoAssetFilePaths?: KalturaFreewheelDistributionAssetPath[];
    thumbAssetFilePath?: string;
}
export declare class KalturaFreewheelDistributionJobProviderData extends KalturaDistributionJobProviderData {
    videoAssetFilePaths: KalturaFreewheelDistributionAssetPath[];
    thumbAssetFilePath: string;
    constructor(data?: KalturaFreewheelDistributionJobProviderDataArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

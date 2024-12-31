import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaConfigurableDistributionProfile, KalturaConfigurableDistributionProfileArgs } from './KalturaConfigurableDistributionProfile';
export interface KalturaAttUverseDistributionProfileArgs extends KalturaConfigurableDistributionProfileArgs {
    ftpHost?: string;
    ftpUsername?: string;
    ftpPassword?: string;
    ftpPath?: string;
    channelTitle?: string;
    flavorAssetFilenameXslt?: string;
    thumbnailAssetFilenameXslt?: string;
    assetFilenameXslt?: string;
}
export declare class KalturaAttUverseDistributionProfile extends KalturaConfigurableDistributionProfile {
    readonly feedUrl: string;
    ftpHost: string;
    ftpUsername: string;
    ftpPassword: string;
    ftpPath: string;
    channelTitle: string;
    flavorAssetFilenameXslt: string;
    thumbnailAssetFilenameXslt: string;
    assetFilenameXslt: string;
    constructor(data?: KalturaAttUverseDistributionProfileArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

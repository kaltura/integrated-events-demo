import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaAttUverseDistributionFile } from './KalturaAttUverseDistributionFile';
import { KalturaConfigurableDistributionJobProviderData, KalturaConfigurableDistributionJobProviderDataArgs } from './KalturaConfigurableDistributionJobProviderData';
export interface KalturaAttUverseDistributionJobProviderDataArgs extends KalturaConfigurableDistributionJobProviderDataArgs {
    filesForDistribution?: KalturaAttUverseDistributionFile[];
    remoteAssetFileUrls?: string;
    remoteThumbnailFileUrls?: string;
    remoteCaptionFileUrls?: string;
}
export declare class KalturaAttUverseDistributionJobProviderData extends KalturaConfigurableDistributionJobProviderData {
    filesForDistribution: KalturaAttUverseDistributionFile[];
    remoteAssetFileUrls: string;
    remoteThumbnailFileUrls: string;
    remoteCaptionFileUrls: string;
    constructor(data?: KalturaAttUverseDistributionJobProviderDataArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

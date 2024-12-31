import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaYouTubeApiCaptionDistributionInfo } from './KalturaYouTubeApiCaptionDistributionInfo';
import { KalturaConfigurableDistributionJobProviderData, KalturaConfigurableDistributionJobProviderDataArgs } from './KalturaConfigurableDistributionJobProviderData';
export interface KalturaYoutubeApiDistributionJobProviderDataArgs extends KalturaConfigurableDistributionJobProviderDataArgs {
    videoAssetFilePath?: string;
    thumbAssetFilePath?: string;
    captionsInfo?: KalturaYouTubeApiCaptionDistributionInfo[];
}
export declare class KalturaYoutubeApiDistributionJobProviderData extends KalturaConfigurableDistributionJobProviderData {
    videoAssetFilePath: string;
    thumbAssetFilePath: string;
    captionsInfo: KalturaYouTubeApiCaptionDistributionInfo[];
    constructor(data?: KalturaYoutubeApiDistributionJobProviderDataArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaFacebookCaptionDistributionInfo } from './KalturaFacebookCaptionDistributionInfo';
import { KalturaConfigurableDistributionJobProviderData, KalturaConfigurableDistributionJobProviderDataArgs } from './KalturaConfigurableDistributionJobProviderData';
export interface KalturaFacebookDistributionJobProviderDataArgs extends KalturaConfigurableDistributionJobProviderDataArgs {
    videoAssetFilePath?: string;
    thumbAssetId?: string;
    captionsInfo?: KalturaFacebookCaptionDistributionInfo[];
}
export declare class KalturaFacebookDistributionJobProviderData extends KalturaConfigurableDistributionJobProviderData {
    videoAssetFilePath: string;
    thumbAssetId: string;
    captionsInfo: KalturaFacebookCaptionDistributionInfo[];
    constructor(data?: KalturaFacebookDistributionJobProviderDataArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

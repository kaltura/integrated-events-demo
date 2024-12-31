import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDailymotionDistributionCaptionInfo } from './KalturaDailymotionDistributionCaptionInfo';
import { KalturaConfigurableDistributionJobProviderData, KalturaConfigurableDistributionJobProviderDataArgs } from './KalturaConfigurableDistributionJobProviderData';
export interface KalturaDailymotionDistributionJobProviderDataArgs extends KalturaConfigurableDistributionJobProviderDataArgs {
    videoAssetFilePath?: string;
    accessControlGeoBlockingOperation?: string;
    accessControlGeoBlockingCountryList?: string;
    captionsInfo?: KalturaDailymotionDistributionCaptionInfo[];
}
export declare class KalturaDailymotionDistributionJobProviderData extends KalturaConfigurableDistributionJobProviderData {
    videoAssetFilePath: string;
    accessControlGeoBlockingOperation: string;
    accessControlGeoBlockingCountryList: string;
    captionsInfo: KalturaDailymotionDistributionCaptionInfo[];
    constructor(data?: KalturaDailymotionDistributionJobProviderDataArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

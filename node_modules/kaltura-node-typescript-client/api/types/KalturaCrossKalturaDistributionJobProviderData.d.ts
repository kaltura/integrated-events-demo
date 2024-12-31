import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaConfigurableDistributionJobProviderData, KalturaConfigurableDistributionJobProviderDataArgs } from './KalturaConfigurableDistributionJobProviderData';
export interface KalturaCrossKalturaDistributionJobProviderDataArgs extends KalturaConfigurableDistributionJobProviderDataArgs {
    distributedFlavorAssets?: string;
    distributedThumbAssets?: string;
    distributedMetadata?: string;
    distributedCaptionAssets?: string;
    distributedCuePoints?: string;
    distributedThumbCuePoints?: string;
    distributedTimedThumbAssets?: string;
}
export declare class KalturaCrossKalturaDistributionJobProviderData extends KalturaConfigurableDistributionJobProviderData {
    distributedFlavorAssets: string;
    distributedThumbAssets: string;
    distributedMetadata: string;
    distributedCaptionAssets: string;
    distributedCuePoints: string;
    distributedThumbCuePoints: string;
    distributedTimedThumbAssets: string;
    constructor(data?: KalturaCrossKalturaDistributionJobProviderDataArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

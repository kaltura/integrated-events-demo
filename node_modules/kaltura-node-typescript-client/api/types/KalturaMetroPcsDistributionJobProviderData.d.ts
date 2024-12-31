import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaConfigurableDistributionJobProviderData, KalturaConfigurableDistributionJobProviderDataArgs } from './KalturaConfigurableDistributionJobProviderData';
export interface KalturaMetroPcsDistributionJobProviderDataArgs extends KalturaConfigurableDistributionJobProviderDataArgs {
    assetLocalPaths?: string;
    thumbUrls?: string;
}
export declare class KalturaMetroPcsDistributionJobProviderData extends KalturaConfigurableDistributionJobProviderData {
    assetLocalPaths: string;
    thumbUrls: string;
    constructor(data?: KalturaMetroPcsDistributionJobProviderDataArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

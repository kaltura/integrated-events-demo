import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaConfigurableDistributionJobProviderData, KalturaConfigurableDistributionJobProviderDataArgs } from './KalturaConfigurableDistributionJobProviderData';
export interface KalturaIdeticDistributionJobProviderDataArgs extends KalturaConfigurableDistributionJobProviderDataArgs {
    thumbnailUrl?: string;
    flavorAssetUrl?: string;
}
export declare class KalturaIdeticDistributionJobProviderData extends KalturaConfigurableDistributionJobProviderData {
    thumbnailUrl: string;
    flavorAssetUrl: string;
    constructor(data?: KalturaIdeticDistributionJobProviderDataArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

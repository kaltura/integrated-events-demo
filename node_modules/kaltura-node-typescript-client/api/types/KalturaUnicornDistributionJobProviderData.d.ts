import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaConfigurableDistributionJobProviderData, KalturaConfigurableDistributionJobProviderDataArgs } from './KalturaConfigurableDistributionJobProviderData';
export interface KalturaUnicornDistributionJobProviderDataArgs extends KalturaConfigurableDistributionJobProviderDataArgs {
    catalogGuid?: string;
    title?: string;
    mediaChanged?: boolean;
    flavorAssetVersion?: string;
    notificationBaseUrl?: string;
}
export declare class KalturaUnicornDistributionJobProviderData extends KalturaConfigurableDistributionJobProviderData {
    catalogGuid: string;
    title: string;
    mediaChanged: boolean;
    flavorAssetVersion: string;
    notificationBaseUrl: string;
    constructor(data?: KalturaUnicornDistributionJobProviderDataArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

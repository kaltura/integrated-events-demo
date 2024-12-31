import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaConfigurableDistributionJobProviderData, KalturaConfigurableDistributionJobProviderDataArgs } from './KalturaConfigurableDistributionJobProviderData';
export interface KalturaUverseDistributionJobProviderDataArgs extends KalturaConfigurableDistributionJobProviderDataArgs {
    localAssetFilePath?: string;
    remoteAssetUrl?: string;
    remoteAssetFileName?: string;
}
export declare class KalturaUverseDistributionJobProviderData extends KalturaConfigurableDistributionJobProviderData {
    localAssetFilePath: string;
    remoteAssetUrl: string;
    remoteAssetFileName: string;
    constructor(data?: KalturaUverseDistributionJobProviderDataArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

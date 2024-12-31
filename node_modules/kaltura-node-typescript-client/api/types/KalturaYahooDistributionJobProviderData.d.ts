import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaConfigurableDistributionJobProviderData, KalturaConfigurableDistributionJobProviderDataArgs } from './KalturaConfigurableDistributionJobProviderData';
export interface KalturaYahooDistributionJobProviderDataArgs extends KalturaConfigurableDistributionJobProviderDataArgs {
    smallThumbPath?: string;
    largeThumbPath?: string;
    videoAssetFilePath?: string;
}
export declare class KalturaYahooDistributionJobProviderData extends KalturaConfigurableDistributionJobProviderData {
    smallThumbPath: string;
    largeThumbPath: string;
    videoAssetFilePath: string;
    constructor(data?: KalturaYahooDistributionJobProviderDataArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

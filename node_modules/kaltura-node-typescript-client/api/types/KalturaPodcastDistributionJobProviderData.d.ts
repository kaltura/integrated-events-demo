import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDistributionJobProviderData, KalturaDistributionJobProviderDataArgs } from './KalturaDistributionJobProviderData';
export interface KalturaPodcastDistributionJobProviderDataArgs extends KalturaDistributionJobProviderDataArgs {
    xml?: string;
    metadataProfileId?: number;
    distributionProfileId?: number;
}
export declare class KalturaPodcastDistributionJobProviderData extends KalturaDistributionJobProviderData {
    xml: string;
    metadataProfileId: number;
    distributionProfileId: number;
    constructor(data?: KalturaPodcastDistributionJobProviderDataArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

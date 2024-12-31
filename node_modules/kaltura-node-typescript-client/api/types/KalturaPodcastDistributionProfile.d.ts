import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDistributionProfile, KalturaDistributionProfileArgs } from './KalturaDistributionProfile';
export interface KalturaPodcastDistributionProfileArgs extends KalturaDistributionProfileArgs {
    xsl?: string;
    metadataProfileId?: number;
}
export declare class KalturaPodcastDistributionProfile extends KalturaDistributionProfile {
    xsl: string;
    readonly feedId: string;
    metadataProfileId: number;
    constructor(data?: KalturaPodcastDistributionProfileArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

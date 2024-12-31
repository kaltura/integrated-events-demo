import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaConfigurableDistributionProfile, KalturaConfigurableDistributionProfileArgs } from './KalturaConfigurableDistributionProfile';
export interface KalturaTVComDistributionProfileArgs extends KalturaConfigurableDistributionProfileArgs {
    metadataProfileId?: number;
    feedTitle?: string;
    feedLink?: string;
    feedDescription?: string;
    feedLanguage?: string;
    feedCopyright?: string;
    feedImageTitle?: string;
    feedImageUrl?: string;
    feedImageLink?: string;
    feedImageWidth?: number;
    feedImageHeight?: number;
}
export declare class KalturaTVComDistributionProfile extends KalturaConfigurableDistributionProfile {
    metadataProfileId: number;
    readonly feedUrl: string;
    feedTitle: string;
    feedLink: string;
    feedDescription: string;
    feedLanguage: string;
    feedCopyright: string;
    feedImageTitle: string;
    feedImageUrl: string;
    feedImageLink: string;
    feedImageWidth: number;
    feedImageHeight: number;
    constructor(data?: KalturaTVComDistributionProfileArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

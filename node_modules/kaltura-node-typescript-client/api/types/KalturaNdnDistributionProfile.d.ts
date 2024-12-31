import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaConfigurableDistributionProfile, KalturaConfigurableDistributionProfileArgs } from './KalturaConfigurableDistributionProfile';
export interface KalturaNdnDistributionProfileArgs extends KalturaConfigurableDistributionProfileArgs {
    channelTitle?: string;
    channelLink?: string;
    channelDescription?: string;
    channelLanguage?: string;
    channelCopyright?: string;
    channelImageTitle?: string;
    channelImageUrl?: string;
    channelImageLink?: string;
    itemMediaRating?: string;
}
export declare class KalturaNdnDistributionProfile extends KalturaConfigurableDistributionProfile {
    readonly feedUrl: string;
    channelTitle: string;
    channelLink: string;
    channelDescription: string;
    channelLanguage: string;
    channelCopyright: string;
    channelImageTitle: string;
    channelImageUrl: string;
    channelImageLink: string;
    itemMediaRating: string;
    constructor(data?: KalturaNdnDistributionProfileArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaConfigurableDistributionProfile, KalturaConfigurableDistributionProfileArgs } from './KalturaConfigurableDistributionProfile';
export interface KalturaUverseDistributionProfileArgs extends KalturaConfigurableDistributionProfileArgs {
    channelTitle?: string;
    channelLink?: string;
    channelDescription?: string;
    channelLanguage?: string;
    channelCopyright?: string;
    channelImageTitle?: string;
    channelImageUrl?: string;
    channelImageLink?: string;
    ftpHost?: string;
    ftpLogin?: string;
    ftpPassword?: string;
}
export declare class KalturaUverseDistributionProfile extends KalturaConfigurableDistributionProfile {
    readonly feedUrl: string;
    channelTitle: string;
    channelLink: string;
    channelDescription: string;
    channelLanguage: string;
    channelCopyright: string;
    channelImageTitle: string;
    channelImageUrl: string;
    channelImageLink: string;
    ftpHost: string;
    ftpLogin: string;
    ftpPassword: string;
    constructor(data?: KalturaUverseDistributionProfileArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

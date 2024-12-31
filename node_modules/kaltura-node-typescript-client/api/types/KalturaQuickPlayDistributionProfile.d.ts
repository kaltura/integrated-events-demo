import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaConfigurableDistributionProfile, KalturaConfigurableDistributionProfileArgs } from './KalturaConfigurableDistributionProfile';
export interface KalturaQuickPlayDistributionProfileArgs extends KalturaConfigurableDistributionProfileArgs {
    sftpHost?: string;
    sftpLogin?: string;
    sftpPass?: string;
    sftpBasePath?: string;
    channelTitle?: string;
    channelLink?: string;
    channelDescription?: string;
    channelManagingEditor?: string;
    channelLanguage?: string;
    channelImageTitle?: string;
    channelImageWidth?: string;
    channelImageHeight?: string;
    channelImageLink?: string;
    channelImageUrl?: string;
    channelCopyright?: string;
    channelGenerator?: string;
    channelRating?: string;
}
export declare class KalturaQuickPlayDistributionProfile extends KalturaConfigurableDistributionProfile {
    sftpHost: string;
    sftpLogin: string;
    sftpPass: string;
    sftpBasePath: string;
    channelTitle: string;
    channelLink: string;
    channelDescription: string;
    channelManagingEditor: string;
    channelLanguage: string;
    channelImageTitle: string;
    channelImageWidth: string;
    channelImageHeight: string;
    channelImageLink: string;
    channelImageUrl: string;
    channelCopyright: string;
    channelGenerator: string;
    channelRating: string;
    constructor(data?: KalturaQuickPlayDistributionProfileArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaConfigurableDistributionProfile, KalturaConfigurableDistributionProfileArgs } from './KalturaConfigurableDistributionProfile';
export interface KalturaYoutubeApiDistributionProfileArgs extends KalturaConfigurableDistributionProfileArgs {
    username?: string;
    defaultCategory?: number;
    allowComments?: string;
    allowEmbedding?: string;
    allowRatings?: string;
    allowResponses?: string;
    apiAuthorizeUrl?: string;
    googleClientId?: string;
    googleClientSecret?: string;
    googleTokenData?: string;
    assumeSuccess?: boolean;
    privacyStatus?: string;
}
export declare class KalturaYoutubeApiDistributionProfile extends KalturaConfigurableDistributionProfile {
    username: string;
    defaultCategory: number;
    allowComments: string;
    allowEmbedding: string;
    allowRatings: string;
    allowResponses: string;
    apiAuthorizeUrl: string;
    googleClientId: string;
    googleClientSecret: string;
    googleTokenData: string;
    assumeSuccess: boolean;
    privacyStatus: string;
    constructor(data?: KalturaYoutubeApiDistributionProfileArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

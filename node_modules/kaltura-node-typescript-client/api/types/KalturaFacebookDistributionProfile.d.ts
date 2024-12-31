import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaConfigurableDistributionProfile, KalturaConfigurableDistributionProfileArgs } from './KalturaConfigurableDistributionProfile';
export interface KalturaFacebookDistributionProfileArgs extends KalturaConfigurableDistributionProfileArgs {
    apiAuthorizeUrl?: string;
    pageId?: string;
    pageAccessToken?: string;
    userAccessToken?: string;
    state?: string;
    permissions?: string;
    reRequestPermissions?: number;
}
export declare class KalturaFacebookDistributionProfile extends KalturaConfigurableDistributionProfile {
    apiAuthorizeUrl: string;
    pageId: string;
    pageAccessToken: string;
    userAccessToken: string;
    state: string;
    permissions: string;
    reRequestPermissions: number;
    constructor(data?: KalturaFacebookDistributionProfileArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

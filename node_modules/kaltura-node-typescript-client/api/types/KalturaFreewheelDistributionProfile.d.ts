import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDistributionProfile, KalturaDistributionProfileArgs } from './KalturaDistributionProfile';
export interface KalturaFreewheelDistributionProfileArgs extends KalturaDistributionProfileArgs {
    apikey?: string;
    email?: string;
    sftpPass?: string;
    sftpLogin?: string;
    accountId?: string;
    metadataProfileId?: number;
}
export declare class KalturaFreewheelDistributionProfile extends KalturaDistributionProfile {
    apikey: string;
    email: string;
    sftpPass: string;
    sftpLogin: string;
    accountId: string;
    metadataProfileId: number;
    constructor(data?: KalturaFreewheelDistributionProfileArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

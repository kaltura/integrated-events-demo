import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaConfigurableDistributionProfile, KalturaConfigurableDistributionProfileArgs } from './KalturaConfigurableDistributionProfile';
export interface KalturaIdeticDistributionProfileArgs extends KalturaConfigurableDistributionProfileArgs {
    ftpPath?: string;
    username?: string;
    password?: string;
    domain?: string;
}
export declare class KalturaIdeticDistributionProfile extends KalturaConfigurableDistributionProfile {
    ftpPath: string;
    username: string;
    password: string;
    domain: string;
    constructor(data?: KalturaIdeticDistributionProfileArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

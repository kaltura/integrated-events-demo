import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaYahooDistributionProcessFeedActionStatus } from './KalturaYahooDistributionProcessFeedActionStatus';
import { KalturaConfigurableDistributionProfile, KalturaConfigurableDistributionProfileArgs } from './KalturaConfigurableDistributionProfile';
export interface KalturaYahooDistributionProfileArgs extends KalturaConfigurableDistributionProfileArgs {
    ftpPath?: string;
    ftpUsername?: string;
    ftpPassword?: string;
    ftpHost?: string;
    contactTelephone?: string;
    contactEmail?: string;
    processFeed?: KalturaYahooDistributionProcessFeedActionStatus;
}
export declare class KalturaYahooDistributionProfile extends KalturaConfigurableDistributionProfile {
    ftpPath: string;
    ftpUsername: string;
    ftpPassword: string;
    ftpHost: string;
    contactTelephone: string;
    contactEmail: string;
    processFeed: KalturaYahooDistributionProcessFeedActionStatus;
    constructor(data?: KalturaYahooDistributionProfileArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

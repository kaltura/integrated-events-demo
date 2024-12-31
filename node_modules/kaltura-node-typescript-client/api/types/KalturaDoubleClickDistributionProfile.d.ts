import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaConfigurableDistributionProfile, KalturaConfigurableDistributionProfileArgs } from './KalturaConfigurableDistributionProfile';
export interface KalturaDoubleClickDistributionProfileArgs extends KalturaConfigurableDistributionProfileArgs {
    channelTitle?: string;
    channelLink?: string;
    channelDescription?: string;
    cuePointsProvider?: string;
    itemsPerPage?: string;
    ignoreSchedulingInFeed?: boolean;
}
export declare class KalturaDoubleClickDistributionProfile extends KalturaConfigurableDistributionProfile {
    channelTitle: string;
    channelLink: string;
    channelDescription: string;
    readonly feedUrl: string;
    cuePointsProvider: string;
    itemsPerPage: string;
    ignoreSchedulingInFeed: boolean;
    constructor(data?: KalturaDoubleClickDistributionProfileArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

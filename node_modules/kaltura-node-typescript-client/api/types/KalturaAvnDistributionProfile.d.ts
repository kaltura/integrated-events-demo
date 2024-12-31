import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaConfigurableDistributionProfile, KalturaConfigurableDistributionProfileArgs } from './KalturaConfigurableDistributionProfile';
export interface KalturaAvnDistributionProfileArgs extends KalturaConfigurableDistributionProfileArgs {
    feedTitle?: string;
}
export declare class KalturaAvnDistributionProfile extends KalturaConfigurableDistributionProfile {
    readonly feedUrl: string;
    feedTitle: string;
    constructor(data?: KalturaAvnDistributionProfileArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

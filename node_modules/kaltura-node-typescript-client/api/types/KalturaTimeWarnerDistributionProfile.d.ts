import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaConfigurableDistributionProfile, KalturaConfigurableDistributionProfileArgs } from './KalturaConfigurableDistributionProfile';
export interface KalturaTimeWarnerDistributionProfileArgs extends KalturaConfigurableDistributionProfileArgs {
}
export declare class KalturaTimeWarnerDistributionProfile extends KalturaConfigurableDistributionProfile {
    readonly feedUrl: string;
    constructor(data?: KalturaTimeWarnerDistributionProfileArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

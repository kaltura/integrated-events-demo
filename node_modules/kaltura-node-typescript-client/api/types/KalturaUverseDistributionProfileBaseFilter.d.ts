import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaConfigurableDistributionProfileFilter, KalturaConfigurableDistributionProfileFilterArgs } from './KalturaConfigurableDistributionProfileFilter';
export interface KalturaUverseDistributionProfileBaseFilterArgs extends KalturaConfigurableDistributionProfileFilterArgs {
}
export declare class KalturaUverseDistributionProfileBaseFilter extends KalturaConfigurableDistributionProfileFilter {
    constructor(data?: KalturaUverseDistributionProfileBaseFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaConfigurableDistributionProfileFilter, KalturaConfigurableDistributionProfileFilterArgs } from './KalturaConfigurableDistributionProfileFilter';
export interface KalturaMetroPcsDistributionProfileBaseFilterArgs extends KalturaConfigurableDistributionProfileFilterArgs {
}
export declare class KalturaMetroPcsDistributionProfileBaseFilter extends KalturaConfigurableDistributionProfileFilter {
    constructor(data?: KalturaMetroPcsDistributionProfileBaseFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

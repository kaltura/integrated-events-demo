import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaConfigurableDistributionProfileBaseFilter, KalturaConfigurableDistributionProfileBaseFilterArgs } from './KalturaConfigurableDistributionProfileBaseFilter';
export interface KalturaConfigurableDistributionProfileFilterArgs extends KalturaConfigurableDistributionProfileBaseFilterArgs {
}
export declare class KalturaConfigurableDistributionProfileFilter extends KalturaConfigurableDistributionProfileBaseFilter {
    constructor(data?: KalturaConfigurableDistributionProfileFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

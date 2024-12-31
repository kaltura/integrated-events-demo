import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDistributionProfileFilter, KalturaDistributionProfileFilterArgs } from './KalturaDistributionProfileFilter';
export interface KalturaConfigurableDistributionProfileBaseFilterArgs extends KalturaDistributionProfileFilterArgs {
}
export declare class KalturaConfigurableDistributionProfileBaseFilter extends KalturaDistributionProfileFilter {
    constructor(data?: KalturaConfigurableDistributionProfileBaseFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

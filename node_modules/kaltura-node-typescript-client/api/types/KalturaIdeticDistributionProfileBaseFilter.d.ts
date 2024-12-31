import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaConfigurableDistributionProfileFilter, KalturaConfigurableDistributionProfileFilterArgs } from './KalturaConfigurableDistributionProfileFilter';
export interface KalturaIdeticDistributionProfileBaseFilterArgs extends KalturaConfigurableDistributionProfileFilterArgs {
}
export declare class KalturaIdeticDistributionProfileBaseFilter extends KalturaConfigurableDistributionProfileFilter {
    constructor(data?: KalturaIdeticDistributionProfileBaseFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

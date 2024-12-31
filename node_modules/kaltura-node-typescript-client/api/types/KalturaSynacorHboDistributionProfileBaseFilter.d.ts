import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaConfigurableDistributionProfileFilter, KalturaConfigurableDistributionProfileFilterArgs } from './KalturaConfigurableDistributionProfileFilter';
export interface KalturaSynacorHboDistributionProfileBaseFilterArgs extends KalturaConfigurableDistributionProfileFilterArgs {
}
export declare class KalturaSynacorHboDistributionProfileBaseFilter extends KalturaConfigurableDistributionProfileFilter {
    constructor(data?: KalturaSynacorHboDistributionProfileBaseFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

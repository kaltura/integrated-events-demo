import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaYahooDistributionProfileBaseFilter, KalturaYahooDistributionProfileBaseFilterArgs } from './KalturaYahooDistributionProfileBaseFilter';
export interface KalturaYahooDistributionProfileFilterArgs extends KalturaYahooDistributionProfileBaseFilterArgs {
}
export declare class KalturaYahooDistributionProfileFilter extends KalturaYahooDistributionProfileBaseFilter {
    constructor(data?: KalturaYahooDistributionProfileFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

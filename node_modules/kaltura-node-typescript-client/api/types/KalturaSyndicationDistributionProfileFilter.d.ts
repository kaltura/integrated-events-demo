import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaSyndicationDistributionProfileBaseFilter, KalturaSyndicationDistributionProfileBaseFilterArgs } from './KalturaSyndicationDistributionProfileBaseFilter';
export interface KalturaSyndicationDistributionProfileFilterArgs extends KalturaSyndicationDistributionProfileBaseFilterArgs {
}
export declare class KalturaSyndicationDistributionProfileFilter extends KalturaSyndicationDistributionProfileBaseFilter {
    constructor(data?: KalturaSyndicationDistributionProfileFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDistributionProfileFilter, KalturaDistributionProfileFilterArgs } from './KalturaDistributionProfileFilter';
export interface KalturaSyndicationDistributionProfileBaseFilterArgs extends KalturaDistributionProfileFilterArgs {
}
export declare class KalturaSyndicationDistributionProfileBaseFilter extends KalturaDistributionProfileFilter {
    constructor(data?: KalturaSyndicationDistributionProfileBaseFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

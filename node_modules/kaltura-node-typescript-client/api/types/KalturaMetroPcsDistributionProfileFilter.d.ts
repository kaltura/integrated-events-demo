import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaMetroPcsDistributionProfileBaseFilter, KalturaMetroPcsDistributionProfileBaseFilterArgs } from './KalturaMetroPcsDistributionProfileBaseFilter';
export interface KalturaMetroPcsDistributionProfileFilterArgs extends KalturaMetroPcsDistributionProfileBaseFilterArgs {
}
export declare class KalturaMetroPcsDistributionProfileFilter extends KalturaMetroPcsDistributionProfileBaseFilter {
    constructor(data?: KalturaMetroPcsDistributionProfileFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaCrossKalturaDistributionProfileBaseFilter, KalturaCrossKalturaDistributionProfileBaseFilterArgs } from './KalturaCrossKalturaDistributionProfileBaseFilter';
export interface KalturaCrossKalturaDistributionProfileFilterArgs extends KalturaCrossKalturaDistributionProfileBaseFilterArgs {
}
export declare class KalturaCrossKalturaDistributionProfileFilter extends KalturaCrossKalturaDistributionProfileBaseFilter {
    constructor(data?: KalturaCrossKalturaDistributionProfileFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaMsnDistributionProfileBaseFilter, KalturaMsnDistributionProfileBaseFilterArgs } from './KalturaMsnDistributionProfileBaseFilter';
export interface KalturaMsnDistributionProfileFilterArgs extends KalturaMsnDistributionProfileBaseFilterArgs {
}
export declare class KalturaMsnDistributionProfileFilter extends KalturaMsnDistributionProfileBaseFilter {
    constructor(data?: KalturaMsnDistributionProfileFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

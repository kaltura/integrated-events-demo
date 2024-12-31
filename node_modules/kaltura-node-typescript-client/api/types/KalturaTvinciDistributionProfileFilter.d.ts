import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTvinciDistributionProfileBaseFilter, KalturaTvinciDistributionProfileBaseFilterArgs } from './KalturaTvinciDistributionProfileBaseFilter';
export interface KalturaTvinciDistributionProfileFilterArgs extends KalturaTvinciDistributionProfileBaseFilterArgs {
}
export declare class KalturaTvinciDistributionProfileFilter extends KalturaTvinciDistributionProfileBaseFilter {
    constructor(data?: KalturaTvinciDistributionProfileFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

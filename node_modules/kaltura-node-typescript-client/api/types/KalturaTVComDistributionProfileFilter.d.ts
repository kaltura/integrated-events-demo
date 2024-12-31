import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTVComDistributionProfileBaseFilter, KalturaTVComDistributionProfileBaseFilterArgs } from './KalturaTVComDistributionProfileBaseFilter';
export interface KalturaTVComDistributionProfileFilterArgs extends KalturaTVComDistributionProfileBaseFilterArgs {
}
export declare class KalturaTVComDistributionProfileFilter extends KalturaTVComDistributionProfileBaseFilter {
    constructor(data?: KalturaTVComDistributionProfileFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

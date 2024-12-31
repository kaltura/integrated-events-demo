import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTimeWarnerDistributionProfileBaseFilter, KalturaTimeWarnerDistributionProfileBaseFilterArgs } from './KalturaTimeWarnerDistributionProfileBaseFilter';
export interface KalturaTimeWarnerDistributionProfileFilterArgs extends KalturaTimeWarnerDistributionProfileBaseFilterArgs {
}
export declare class KalturaTimeWarnerDistributionProfileFilter extends KalturaTimeWarnerDistributionProfileBaseFilter {
    constructor(data?: KalturaTimeWarnerDistributionProfileFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

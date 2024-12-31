import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaComcastMrssDistributionProfileBaseFilter, KalturaComcastMrssDistributionProfileBaseFilterArgs } from './KalturaComcastMrssDistributionProfileBaseFilter';
export interface KalturaComcastMrssDistributionProfileFilterArgs extends KalturaComcastMrssDistributionProfileBaseFilterArgs {
}
export declare class KalturaComcastMrssDistributionProfileFilter extends KalturaComcastMrssDistributionProfileBaseFilter {
    constructor(data?: KalturaComcastMrssDistributionProfileFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

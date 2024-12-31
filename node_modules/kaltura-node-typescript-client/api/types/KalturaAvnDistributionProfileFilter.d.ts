import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaAvnDistributionProfileBaseFilter, KalturaAvnDistributionProfileBaseFilterArgs } from './KalturaAvnDistributionProfileBaseFilter';
export interface KalturaAvnDistributionProfileFilterArgs extends KalturaAvnDistributionProfileBaseFilterArgs {
}
export declare class KalturaAvnDistributionProfileFilter extends KalturaAvnDistributionProfileBaseFilter {
    constructor(data?: KalturaAvnDistributionProfileFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

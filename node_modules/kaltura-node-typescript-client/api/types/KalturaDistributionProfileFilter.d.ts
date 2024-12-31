import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDistributionProfileBaseFilter, KalturaDistributionProfileBaseFilterArgs } from './KalturaDistributionProfileBaseFilter';
export interface KalturaDistributionProfileFilterArgs extends KalturaDistributionProfileBaseFilterArgs {
}
export declare class KalturaDistributionProfileFilter extends KalturaDistributionProfileBaseFilter {
    constructor(data?: KalturaDistributionProfileFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

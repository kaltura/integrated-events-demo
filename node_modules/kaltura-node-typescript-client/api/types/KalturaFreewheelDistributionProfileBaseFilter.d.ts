import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDistributionProfileFilter, KalturaDistributionProfileFilterArgs } from './KalturaDistributionProfileFilter';
export interface KalturaFreewheelDistributionProfileBaseFilterArgs extends KalturaDistributionProfileFilterArgs {
}
export declare class KalturaFreewheelDistributionProfileBaseFilter extends KalturaDistributionProfileFilter {
    constructor(data?: KalturaFreewheelDistributionProfileBaseFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

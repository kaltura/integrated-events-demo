import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaFreewheelDistributionProfileBaseFilter, KalturaFreewheelDistributionProfileBaseFilterArgs } from './KalturaFreewheelDistributionProfileBaseFilter';
export interface KalturaFreewheelDistributionProfileFilterArgs extends KalturaFreewheelDistributionProfileBaseFilterArgs {
}
export declare class KalturaFreewheelDistributionProfileFilter extends KalturaFreewheelDistributionProfileBaseFilter {
    constructor(data?: KalturaFreewheelDistributionProfileFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

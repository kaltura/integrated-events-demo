import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaFreewheelGenericDistributionProfileBaseFilter, KalturaFreewheelGenericDistributionProfileBaseFilterArgs } from './KalturaFreewheelGenericDistributionProfileBaseFilter';
export interface KalturaFreewheelGenericDistributionProfileFilterArgs extends KalturaFreewheelGenericDistributionProfileBaseFilterArgs {
}
export declare class KalturaFreewheelGenericDistributionProfileFilter extends KalturaFreewheelGenericDistributionProfileBaseFilter {
    constructor(data?: KalturaFreewheelGenericDistributionProfileFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

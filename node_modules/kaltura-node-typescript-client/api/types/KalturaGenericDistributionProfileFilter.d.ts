import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaGenericDistributionProfileBaseFilter, KalturaGenericDistributionProfileBaseFilterArgs } from './KalturaGenericDistributionProfileBaseFilter';
export interface KalturaGenericDistributionProfileFilterArgs extends KalturaGenericDistributionProfileBaseFilterArgs {
}
export declare class KalturaGenericDistributionProfileFilter extends KalturaGenericDistributionProfileBaseFilter {
    constructor(data?: KalturaGenericDistributionProfileFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

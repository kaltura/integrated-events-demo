import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDistributionProfileFilter, KalturaDistributionProfileFilterArgs } from './KalturaDistributionProfileFilter';
export interface KalturaGenericDistributionProfileBaseFilterArgs extends KalturaDistributionProfileFilterArgs {
}
export declare class KalturaGenericDistributionProfileBaseFilter extends KalturaDistributionProfileFilter {
    constructor(data?: KalturaGenericDistributionProfileBaseFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

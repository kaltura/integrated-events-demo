import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaAttUverseDistributionProfileBaseFilter, KalturaAttUverseDistributionProfileBaseFilterArgs } from './KalturaAttUverseDistributionProfileBaseFilter';
export interface KalturaAttUverseDistributionProfileFilterArgs extends KalturaAttUverseDistributionProfileBaseFilterArgs {
}
export declare class KalturaAttUverseDistributionProfileFilter extends KalturaAttUverseDistributionProfileBaseFilter {
    constructor(data?: KalturaAttUverseDistributionProfileFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

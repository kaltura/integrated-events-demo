import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaUverseDistributionProfileBaseFilter, KalturaUverseDistributionProfileBaseFilterArgs } from './KalturaUverseDistributionProfileBaseFilter';
export interface KalturaUverseDistributionProfileFilterArgs extends KalturaUverseDistributionProfileBaseFilterArgs {
}
export declare class KalturaUverseDistributionProfileFilter extends KalturaUverseDistributionProfileBaseFilter {
    constructor(data?: KalturaUverseDistributionProfileFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

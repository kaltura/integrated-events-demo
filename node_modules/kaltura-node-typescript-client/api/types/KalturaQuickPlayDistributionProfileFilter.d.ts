import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaQuickPlayDistributionProfileBaseFilter, KalturaQuickPlayDistributionProfileBaseFilterArgs } from './KalturaQuickPlayDistributionProfileBaseFilter';
export interface KalturaQuickPlayDistributionProfileFilterArgs extends KalturaQuickPlayDistributionProfileBaseFilterArgs {
}
export declare class KalturaQuickPlayDistributionProfileFilter extends KalturaQuickPlayDistributionProfileBaseFilter {
    constructor(data?: KalturaQuickPlayDistributionProfileFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

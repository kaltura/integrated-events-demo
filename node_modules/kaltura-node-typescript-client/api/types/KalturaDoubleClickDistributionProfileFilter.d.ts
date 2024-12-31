import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDoubleClickDistributionProfileBaseFilter, KalturaDoubleClickDistributionProfileBaseFilterArgs } from './KalturaDoubleClickDistributionProfileBaseFilter';
export interface KalturaDoubleClickDistributionProfileFilterArgs extends KalturaDoubleClickDistributionProfileBaseFilterArgs {
}
export declare class KalturaDoubleClickDistributionProfileFilter extends KalturaDoubleClickDistributionProfileBaseFilter {
    constructor(data?: KalturaDoubleClickDistributionProfileFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

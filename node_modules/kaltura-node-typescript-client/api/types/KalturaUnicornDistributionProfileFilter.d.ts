import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaUnicornDistributionProfileBaseFilter, KalturaUnicornDistributionProfileBaseFilterArgs } from './KalturaUnicornDistributionProfileBaseFilter';
export interface KalturaUnicornDistributionProfileFilterArgs extends KalturaUnicornDistributionProfileBaseFilterArgs {
}
export declare class KalturaUnicornDistributionProfileFilter extends KalturaUnicornDistributionProfileBaseFilter {
    constructor(data?: KalturaUnicornDistributionProfileFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

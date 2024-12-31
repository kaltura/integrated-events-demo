import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaIdeticDistributionProfileBaseFilter, KalturaIdeticDistributionProfileBaseFilterArgs } from './KalturaIdeticDistributionProfileBaseFilter';
export interface KalturaIdeticDistributionProfileFilterArgs extends KalturaIdeticDistributionProfileBaseFilterArgs {
}
export declare class KalturaIdeticDistributionProfileFilter extends KalturaIdeticDistributionProfileBaseFilter {
    constructor(data?: KalturaIdeticDistributionProfileFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDistributionProfileFilter, KalturaDistributionProfileFilterArgs } from './KalturaDistributionProfileFilter';
export interface KalturaPodcastDistributionProfileBaseFilterArgs extends KalturaDistributionProfileFilterArgs {
}
export declare class KalturaPodcastDistributionProfileBaseFilter extends KalturaDistributionProfileFilter {
    constructor(data?: KalturaPodcastDistributionProfileBaseFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaPodcastDistributionProfileBaseFilter, KalturaPodcastDistributionProfileBaseFilterArgs } from './KalturaPodcastDistributionProfileBaseFilter';
export interface KalturaPodcastDistributionProfileFilterArgs extends KalturaPodcastDistributionProfileBaseFilterArgs {
}
export declare class KalturaPodcastDistributionProfileFilter extends KalturaPodcastDistributionProfileBaseFilter {
    constructor(data?: KalturaPodcastDistributionProfileFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

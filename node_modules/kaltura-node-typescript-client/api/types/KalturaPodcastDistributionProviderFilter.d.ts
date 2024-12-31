import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaPodcastDistributionProviderBaseFilter, KalturaPodcastDistributionProviderBaseFilterArgs } from './KalturaPodcastDistributionProviderBaseFilter';
export interface KalturaPodcastDistributionProviderFilterArgs extends KalturaPodcastDistributionProviderBaseFilterArgs {
}
export declare class KalturaPodcastDistributionProviderFilter extends KalturaPodcastDistributionProviderBaseFilter {
    constructor(data?: KalturaPodcastDistributionProviderFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

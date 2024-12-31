import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDistributionProviderFilter, KalturaDistributionProviderFilterArgs } from './KalturaDistributionProviderFilter';
export interface KalturaPodcastDistributionProviderBaseFilterArgs extends KalturaDistributionProviderFilterArgs {
}
export declare class KalturaPodcastDistributionProviderBaseFilter extends KalturaDistributionProviderFilter {
    constructor(data?: KalturaPodcastDistributionProviderBaseFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

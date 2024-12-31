import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaYoutubeApiDistributionProviderBaseFilter, KalturaYoutubeApiDistributionProviderBaseFilterArgs } from './KalturaYoutubeApiDistributionProviderBaseFilter';
export interface KalturaYoutubeApiDistributionProviderFilterArgs extends KalturaYoutubeApiDistributionProviderBaseFilterArgs {
}
export declare class KalturaYoutubeApiDistributionProviderFilter extends KalturaYoutubeApiDistributionProviderBaseFilter {
    constructor(data?: KalturaYoutubeApiDistributionProviderFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

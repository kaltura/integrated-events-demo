import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaYouTubeDistributionProviderBaseFilter, KalturaYouTubeDistributionProviderBaseFilterArgs } from './KalturaYouTubeDistributionProviderBaseFilter';
export interface KalturaYouTubeDistributionProviderFilterArgs extends KalturaYouTubeDistributionProviderBaseFilterArgs {
}
export declare class KalturaYouTubeDistributionProviderFilter extends KalturaYouTubeDistributionProviderBaseFilter {
    constructor(data?: KalturaYouTubeDistributionProviderFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

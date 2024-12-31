import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaYoutubeApiDistributionProfileBaseFilter, KalturaYoutubeApiDistributionProfileBaseFilterArgs } from './KalturaYoutubeApiDistributionProfileBaseFilter';
export interface KalturaYoutubeApiDistributionProfileFilterArgs extends KalturaYoutubeApiDistributionProfileBaseFilterArgs {
}
export declare class KalturaYoutubeApiDistributionProfileFilter extends KalturaYoutubeApiDistributionProfileBaseFilter {
    constructor(data?: KalturaYoutubeApiDistributionProfileFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

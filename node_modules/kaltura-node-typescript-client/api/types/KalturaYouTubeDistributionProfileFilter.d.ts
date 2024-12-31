import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaYouTubeDistributionProfileBaseFilter, KalturaYouTubeDistributionProfileBaseFilterArgs } from './KalturaYouTubeDistributionProfileBaseFilter';
export interface KalturaYouTubeDistributionProfileFilterArgs extends KalturaYouTubeDistributionProfileBaseFilterArgs {
}
export declare class KalturaYouTubeDistributionProfileFilter extends KalturaYouTubeDistributionProfileBaseFilter {
    constructor(data?: KalturaYouTubeDistributionProfileFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

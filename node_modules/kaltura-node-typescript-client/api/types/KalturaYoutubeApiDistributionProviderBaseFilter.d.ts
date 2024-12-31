import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDistributionProviderFilter, KalturaDistributionProviderFilterArgs } from './KalturaDistributionProviderFilter';
export interface KalturaYoutubeApiDistributionProviderBaseFilterArgs extends KalturaDistributionProviderFilterArgs {
}
export declare class KalturaYoutubeApiDistributionProviderBaseFilter extends KalturaDistributionProviderFilter {
    constructor(data?: KalturaYoutubeApiDistributionProviderBaseFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

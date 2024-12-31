import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDistributionProviderFilter, KalturaDistributionProviderFilterArgs } from './KalturaDistributionProviderFilter';
export interface KalturaYouTubeDistributionProviderBaseFilterArgs extends KalturaDistributionProviderFilterArgs {
}
export declare class KalturaYouTubeDistributionProviderBaseFilter extends KalturaDistributionProviderFilter {
    constructor(data?: KalturaYouTubeDistributionProviderBaseFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaConfigurableDistributionProfileFilter, KalturaConfigurableDistributionProfileFilterArgs } from './KalturaConfigurableDistributionProfileFilter';
export interface KalturaYoutubeApiDistributionProfileBaseFilterArgs extends KalturaConfigurableDistributionProfileFilterArgs {
}
export declare class KalturaYoutubeApiDistributionProfileBaseFilter extends KalturaConfigurableDistributionProfileFilter {
    constructor(data?: KalturaYoutubeApiDistributionProfileBaseFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

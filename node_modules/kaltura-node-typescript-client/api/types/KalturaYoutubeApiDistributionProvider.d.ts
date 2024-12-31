import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDistributionProvider, KalturaDistributionProviderArgs } from './KalturaDistributionProvider';
export interface KalturaYoutubeApiDistributionProviderArgs extends KalturaDistributionProviderArgs {
}
export declare class KalturaYoutubeApiDistributionProvider extends KalturaDistributionProvider {
    constructor(data?: KalturaYoutubeApiDistributionProviderArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

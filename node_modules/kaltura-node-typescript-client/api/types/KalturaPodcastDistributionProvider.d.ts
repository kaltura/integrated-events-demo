import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDistributionProvider, KalturaDistributionProviderArgs } from './KalturaDistributionProvider';
export interface KalturaPodcastDistributionProviderArgs extends KalturaDistributionProviderArgs {
}
export declare class KalturaPodcastDistributionProvider extends KalturaDistributionProvider {
    constructor(data?: KalturaPodcastDistributionProviderArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

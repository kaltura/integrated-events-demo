import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDistributionProvider, KalturaDistributionProviderArgs } from './KalturaDistributionProvider';
export interface KalturaYouTubeDistributionProviderArgs extends KalturaDistributionProviderArgs {
}
export declare class KalturaYouTubeDistributionProvider extends KalturaDistributionProvider {
    constructor(data?: KalturaYouTubeDistributionProviderArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

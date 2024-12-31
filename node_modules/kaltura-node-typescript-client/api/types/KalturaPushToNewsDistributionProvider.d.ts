import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDistributionProvider, KalturaDistributionProviderArgs } from './KalturaDistributionProvider';
export interface KalturaPushToNewsDistributionProviderArgs extends KalturaDistributionProviderArgs {
}
export declare class KalturaPushToNewsDistributionProvider extends KalturaDistributionProvider {
    constructor(data?: KalturaPushToNewsDistributionProviderArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

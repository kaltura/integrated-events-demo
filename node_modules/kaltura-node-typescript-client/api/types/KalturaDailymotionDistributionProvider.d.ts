import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDistributionProvider, KalturaDistributionProviderArgs } from './KalturaDistributionProvider';
export interface KalturaDailymotionDistributionProviderArgs extends KalturaDistributionProviderArgs {
}
export declare class KalturaDailymotionDistributionProvider extends KalturaDistributionProvider {
    constructor(data?: KalturaDailymotionDistributionProviderArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDistributionProvider, KalturaDistributionProviderArgs } from './KalturaDistributionProvider';
export interface KalturaYahooDistributionProviderArgs extends KalturaDistributionProviderArgs {
}
export declare class KalturaYahooDistributionProvider extends KalturaDistributionProvider {
    constructor(data?: KalturaYahooDistributionProviderArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

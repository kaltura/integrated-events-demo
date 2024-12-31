import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDistributionProviderFilter, KalturaDistributionProviderFilterArgs } from './KalturaDistributionProviderFilter';
export interface KalturaYahooDistributionProviderBaseFilterArgs extends KalturaDistributionProviderFilterArgs {
}
export declare class KalturaYahooDistributionProviderBaseFilter extends KalturaDistributionProviderFilter {
    constructor(data?: KalturaYahooDistributionProviderBaseFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

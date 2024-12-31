import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaYahooDistributionProviderBaseFilter, KalturaYahooDistributionProviderBaseFilterArgs } from './KalturaYahooDistributionProviderBaseFilter';
export interface KalturaYahooDistributionProviderFilterArgs extends KalturaYahooDistributionProviderBaseFilterArgs {
}
export declare class KalturaYahooDistributionProviderFilter extends KalturaYahooDistributionProviderBaseFilter {
    constructor(data?: KalturaYahooDistributionProviderFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

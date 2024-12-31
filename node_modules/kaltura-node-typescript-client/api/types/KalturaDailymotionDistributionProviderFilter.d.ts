import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDailymotionDistributionProviderBaseFilter, KalturaDailymotionDistributionProviderBaseFilterArgs } from './KalturaDailymotionDistributionProviderBaseFilter';
export interface KalturaDailymotionDistributionProviderFilterArgs extends KalturaDailymotionDistributionProviderBaseFilterArgs {
}
export declare class KalturaDailymotionDistributionProviderFilter extends KalturaDailymotionDistributionProviderBaseFilter {
    constructor(data?: KalturaDailymotionDistributionProviderFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDistributionProviderFilter, KalturaDistributionProviderFilterArgs } from './KalturaDistributionProviderFilter';
export interface KalturaDailymotionDistributionProviderBaseFilterArgs extends KalturaDistributionProviderFilterArgs {
}
export declare class KalturaDailymotionDistributionProviderBaseFilter extends KalturaDistributionProviderFilter {
    constructor(data?: KalturaDailymotionDistributionProviderBaseFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

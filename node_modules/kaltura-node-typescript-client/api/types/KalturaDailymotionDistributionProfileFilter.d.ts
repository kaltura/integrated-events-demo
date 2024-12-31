import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDailymotionDistributionProfileBaseFilter, KalturaDailymotionDistributionProfileBaseFilterArgs } from './KalturaDailymotionDistributionProfileBaseFilter';
export interface KalturaDailymotionDistributionProfileFilterArgs extends KalturaDailymotionDistributionProfileBaseFilterArgs {
}
export declare class KalturaDailymotionDistributionProfileFilter extends KalturaDailymotionDistributionProfileBaseFilter {
    constructor(data?: KalturaDailymotionDistributionProfileFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaCrossKalturaDistributionProviderBaseFilter, KalturaCrossKalturaDistributionProviderBaseFilterArgs } from './KalturaCrossKalturaDistributionProviderBaseFilter';
export interface KalturaCrossKalturaDistributionProviderFilterArgs extends KalturaCrossKalturaDistributionProviderBaseFilterArgs {
}
export declare class KalturaCrossKalturaDistributionProviderFilter extends KalturaCrossKalturaDistributionProviderBaseFilter {
    constructor(data?: KalturaCrossKalturaDistributionProviderFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

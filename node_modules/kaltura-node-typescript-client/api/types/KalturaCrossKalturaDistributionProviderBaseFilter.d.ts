import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDistributionProviderFilter, KalturaDistributionProviderFilterArgs } from './KalturaDistributionProviderFilter';
export interface KalturaCrossKalturaDistributionProviderBaseFilterArgs extends KalturaDistributionProviderFilterArgs {
}
export declare class KalturaCrossKalturaDistributionProviderBaseFilter extends KalturaDistributionProviderFilter {
    constructor(data?: KalturaCrossKalturaDistributionProviderBaseFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

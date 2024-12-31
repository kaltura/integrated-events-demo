import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaMetroPcsDistributionProviderBaseFilter, KalturaMetroPcsDistributionProviderBaseFilterArgs } from './KalturaMetroPcsDistributionProviderBaseFilter';
export interface KalturaMetroPcsDistributionProviderFilterArgs extends KalturaMetroPcsDistributionProviderBaseFilterArgs {
}
export declare class KalturaMetroPcsDistributionProviderFilter extends KalturaMetroPcsDistributionProviderBaseFilter {
    constructor(data?: KalturaMetroPcsDistributionProviderFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDistributionProviderFilter, KalturaDistributionProviderFilterArgs } from './KalturaDistributionProviderFilter';
export interface KalturaMetroPcsDistributionProviderBaseFilterArgs extends KalturaDistributionProviderFilterArgs {
}
export declare class KalturaMetroPcsDistributionProviderBaseFilter extends KalturaDistributionProviderFilter {
    constructor(data?: KalturaMetroPcsDistributionProviderBaseFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaQuickPlayDistributionProviderBaseFilter, KalturaQuickPlayDistributionProviderBaseFilterArgs } from './KalturaQuickPlayDistributionProviderBaseFilter';
export interface KalturaQuickPlayDistributionProviderFilterArgs extends KalturaQuickPlayDistributionProviderBaseFilterArgs {
}
export declare class KalturaQuickPlayDistributionProviderFilter extends KalturaQuickPlayDistributionProviderBaseFilter {
    constructor(data?: KalturaQuickPlayDistributionProviderFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

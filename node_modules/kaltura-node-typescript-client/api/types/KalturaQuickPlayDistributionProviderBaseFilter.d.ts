import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDistributionProviderFilter, KalturaDistributionProviderFilterArgs } from './KalturaDistributionProviderFilter';
export interface KalturaQuickPlayDistributionProviderBaseFilterArgs extends KalturaDistributionProviderFilterArgs {
}
export declare class KalturaQuickPlayDistributionProviderBaseFilter extends KalturaDistributionProviderFilter {
    constructor(data?: KalturaQuickPlayDistributionProviderBaseFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

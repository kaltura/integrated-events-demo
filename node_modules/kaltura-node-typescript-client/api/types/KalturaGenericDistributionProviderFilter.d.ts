import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaGenericDistributionProviderBaseFilter, KalturaGenericDistributionProviderBaseFilterArgs } from './KalturaGenericDistributionProviderBaseFilter';
export interface KalturaGenericDistributionProviderFilterArgs extends KalturaGenericDistributionProviderBaseFilterArgs {
}
export declare class KalturaGenericDistributionProviderFilter extends KalturaGenericDistributionProviderBaseFilter {
    constructor(data?: KalturaGenericDistributionProviderFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

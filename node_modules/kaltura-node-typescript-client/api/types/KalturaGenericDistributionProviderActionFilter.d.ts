import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaGenericDistributionProviderActionBaseFilter, KalturaGenericDistributionProviderActionBaseFilterArgs } from './KalturaGenericDistributionProviderActionBaseFilter';
export interface KalturaGenericDistributionProviderActionFilterArgs extends KalturaGenericDistributionProviderActionBaseFilterArgs {
}
export declare class KalturaGenericDistributionProviderActionFilter extends KalturaGenericDistributionProviderActionBaseFilter {
    constructor(data?: KalturaGenericDistributionProviderActionFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

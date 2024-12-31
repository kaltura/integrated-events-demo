import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaAvnDistributionProviderBaseFilter, KalturaAvnDistributionProviderBaseFilterArgs } from './KalturaAvnDistributionProviderBaseFilter';
export interface KalturaAvnDistributionProviderFilterArgs extends KalturaAvnDistributionProviderBaseFilterArgs {
}
export declare class KalturaAvnDistributionProviderFilter extends KalturaAvnDistributionProviderBaseFilter {
    constructor(data?: KalturaAvnDistributionProviderFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

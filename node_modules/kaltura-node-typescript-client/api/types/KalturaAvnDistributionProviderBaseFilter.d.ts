import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDistributionProviderFilter, KalturaDistributionProviderFilterArgs } from './KalturaDistributionProviderFilter';
export interface KalturaAvnDistributionProviderBaseFilterArgs extends KalturaDistributionProviderFilterArgs {
}
export declare class KalturaAvnDistributionProviderBaseFilter extends KalturaDistributionProviderFilter {
    constructor(data?: KalturaAvnDistributionProviderBaseFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

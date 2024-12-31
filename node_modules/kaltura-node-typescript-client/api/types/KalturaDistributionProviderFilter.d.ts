import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDistributionProviderBaseFilter, KalturaDistributionProviderBaseFilterArgs } from './KalturaDistributionProviderBaseFilter';
export interface KalturaDistributionProviderFilterArgs extends KalturaDistributionProviderBaseFilterArgs {
}
export declare class KalturaDistributionProviderFilter extends KalturaDistributionProviderBaseFilter {
    constructor(data?: KalturaDistributionProviderFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

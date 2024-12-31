import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDistributionProviderFilter, KalturaDistributionProviderFilterArgs } from './KalturaDistributionProviderFilter';
export interface KalturaAttUverseDistributionProviderBaseFilterArgs extends KalturaDistributionProviderFilterArgs {
}
export declare class KalturaAttUverseDistributionProviderBaseFilter extends KalturaDistributionProviderFilter {
    constructor(data?: KalturaAttUverseDistributionProviderBaseFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

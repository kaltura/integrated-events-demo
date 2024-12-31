import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaAttUverseDistributionProviderBaseFilter, KalturaAttUverseDistributionProviderBaseFilterArgs } from './KalturaAttUverseDistributionProviderBaseFilter';
export interface KalturaAttUverseDistributionProviderFilterArgs extends KalturaAttUverseDistributionProviderBaseFilterArgs {
}
export declare class KalturaAttUverseDistributionProviderFilter extends KalturaAttUverseDistributionProviderBaseFilter {
    constructor(data?: KalturaAttUverseDistributionProviderFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

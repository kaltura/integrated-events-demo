import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaUverseDistributionProviderBaseFilter, KalturaUverseDistributionProviderBaseFilterArgs } from './KalturaUverseDistributionProviderBaseFilter';
export interface KalturaUverseDistributionProviderFilterArgs extends KalturaUverseDistributionProviderBaseFilterArgs {
}
export declare class KalturaUverseDistributionProviderFilter extends KalturaUverseDistributionProviderBaseFilter {
    constructor(data?: KalturaUverseDistributionProviderFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

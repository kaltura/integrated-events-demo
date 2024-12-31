import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDistributionProviderFilter, KalturaDistributionProviderFilterArgs } from './KalturaDistributionProviderFilter';
export interface KalturaUverseDistributionProviderBaseFilterArgs extends KalturaDistributionProviderFilterArgs {
}
export declare class KalturaUverseDistributionProviderBaseFilter extends KalturaDistributionProviderFilter {
    constructor(data?: KalturaUverseDistributionProviderBaseFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

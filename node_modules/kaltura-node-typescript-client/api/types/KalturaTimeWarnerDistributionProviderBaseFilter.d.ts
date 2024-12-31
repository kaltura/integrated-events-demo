import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDistributionProviderFilter, KalturaDistributionProviderFilterArgs } from './KalturaDistributionProviderFilter';
export interface KalturaTimeWarnerDistributionProviderBaseFilterArgs extends KalturaDistributionProviderFilterArgs {
}
export declare class KalturaTimeWarnerDistributionProviderBaseFilter extends KalturaDistributionProviderFilter {
    constructor(data?: KalturaTimeWarnerDistributionProviderBaseFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

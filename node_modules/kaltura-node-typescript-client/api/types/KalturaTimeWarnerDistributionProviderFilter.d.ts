import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTimeWarnerDistributionProviderBaseFilter, KalturaTimeWarnerDistributionProviderBaseFilterArgs } from './KalturaTimeWarnerDistributionProviderBaseFilter';
export interface KalturaTimeWarnerDistributionProviderFilterArgs extends KalturaTimeWarnerDistributionProviderBaseFilterArgs {
}
export declare class KalturaTimeWarnerDistributionProviderFilter extends KalturaTimeWarnerDistributionProviderBaseFilter {
    constructor(data?: KalturaTimeWarnerDistributionProviderFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

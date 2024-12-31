import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaComcastMrssDistributionProviderBaseFilter, KalturaComcastMrssDistributionProviderBaseFilterArgs } from './KalturaComcastMrssDistributionProviderBaseFilter';
export interface KalturaComcastMrssDistributionProviderFilterArgs extends KalturaComcastMrssDistributionProviderBaseFilterArgs {
}
export declare class KalturaComcastMrssDistributionProviderFilter extends KalturaComcastMrssDistributionProviderBaseFilter {
    constructor(data?: KalturaComcastMrssDistributionProviderFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

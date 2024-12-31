import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDistributionProviderFilter, KalturaDistributionProviderFilterArgs } from './KalturaDistributionProviderFilter';
export interface KalturaComcastMrssDistributionProviderBaseFilterArgs extends KalturaDistributionProviderFilterArgs {
}
export declare class KalturaComcastMrssDistributionProviderBaseFilter extends KalturaDistributionProviderFilter {
    constructor(data?: KalturaComcastMrssDistributionProviderBaseFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

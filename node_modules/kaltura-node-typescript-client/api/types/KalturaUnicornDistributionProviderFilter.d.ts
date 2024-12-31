import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaUnicornDistributionProviderBaseFilter, KalturaUnicornDistributionProviderBaseFilterArgs } from './KalturaUnicornDistributionProviderBaseFilter';
export interface KalturaUnicornDistributionProviderFilterArgs extends KalturaUnicornDistributionProviderBaseFilterArgs {
}
export declare class KalturaUnicornDistributionProviderFilter extends KalturaUnicornDistributionProviderBaseFilter {
    constructor(data?: KalturaUnicornDistributionProviderFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

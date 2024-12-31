import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDistributionProviderFilter, KalturaDistributionProviderFilterArgs } from './KalturaDistributionProviderFilter';
export interface KalturaUnicornDistributionProviderBaseFilterArgs extends KalturaDistributionProviderFilterArgs {
}
export declare class KalturaUnicornDistributionProviderBaseFilter extends KalturaDistributionProviderFilter {
    constructor(data?: KalturaUnicornDistributionProviderBaseFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

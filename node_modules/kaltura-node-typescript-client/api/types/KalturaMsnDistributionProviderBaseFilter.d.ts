import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDistributionProviderFilter, KalturaDistributionProviderFilterArgs } from './KalturaDistributionProviderFilter';
export interface KalturaMsnDistributionProviderBaseFilterArgs extends KalturaDistributionProviderFilterArgs {
}
export declare class KalturaMsnDistributionProviderBaseFilter extends KalturaDistributionProviderFilter {
    constructor(data?: KalturaMsnDistributionProviderBaseFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

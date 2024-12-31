import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaMsnDistributionProviderBaseFilter, KalturaMsnDistributionProviderBaseFilterArgs } from './KalturaMsnDistributionProviderBaseFilter';
export interface KalturaMsnDistributionProviderFilterArgs extends KalturaMsnDistributionProviderBaseFilterArgs {
}
export declare class KalturaMsnDistributionProviderFilter extends KalturaMsnDistributionProviderBaseFilter {
    constructor(data?: KalturaMsnDistributionProviderFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

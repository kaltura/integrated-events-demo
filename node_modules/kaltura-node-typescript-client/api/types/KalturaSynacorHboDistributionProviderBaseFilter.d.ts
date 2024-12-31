import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDistributionProviderFilter, KalturaDistributionProviderFilterArgs } from './KalturaDistributionProviderFilter';
export interface KalturaSynacorHboDistributionProviderBaseFilterArgs extends KalturaDistributionProviderFilterArgs {
}
export declare class KalturaSynacorHboDistributionProviderBaseFilter extends KalturaDistributionProviderFilter {
    constructor(data?: KalturaSynacorHboDistributionProviderBaseFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

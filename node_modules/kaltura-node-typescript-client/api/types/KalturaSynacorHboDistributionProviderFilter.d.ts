import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaSynacorHboDistributionProviderBaseFilter, KalturaSynacorHboDistributionProviderBaseFilterArgs } from './KalturaSynacorHboDistributionProviderBaseFilter';
export interface KalturaSynacorHboDistributionProviderFilterArgs extends KalturaSynacorHboDistributionProviderBaseFilterArgs {
}
export declare class KalturaSynacorHboDistributionProviderFilter extends KalturaSynacorHboDistributionProviderBaseFilter {
    constructor(data?: KalturaSynacorHboDistributionProviderFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

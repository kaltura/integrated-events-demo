import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDistributionProviderFilter, KalturaDistributionProviderFilterArgs } from './KalturaDistributionProviderFilter';
export interface KalturaSyndicationDistributionProviderBaseFilterArgs extends KalturaDistributionProviderFilterArgs {
}
export declare class KalturaSyndicationDistributionProviderBaseFilter extends KalturaDistributionProviderFilter {
    constructor(data?: KalturaSyndicationDistributionProviderBaseFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDistributionProviderFilter, KalturaDistributionProviderFilterArgs } from './KalturaDistributionProviderFilter';
export interface KalturaTvinciDistributionProviderBaseFilterArgs extends KalturaDistributionProviderFilterArgs {
}
export declare class KalturaTvinciDistributionProviderBaseFilter extends KalturaDistributionProviderFilter {
    constructor(data?: KalturaTvinciDistributionProviderBaseFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

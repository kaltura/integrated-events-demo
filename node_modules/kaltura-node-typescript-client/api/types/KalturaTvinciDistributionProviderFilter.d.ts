import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTvinciDistributionProviderBaseFilter, KalturaTvinciDistributionProviderBaseFilterArgs } from './KalturaTvinciDistributionProviderBaseFilter';
export interface KalturaTvinciDistributionProviderFilterArgs extends KalturaTvinciDistributionProviderBaseFilterArgs {
}
export declare class KalturaTvinciDistributionProviderFilter extends KalturaTvinciDistributionProviderBaseFilter {
    constructor(data?: KalturaTvinciDistributionProviderFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

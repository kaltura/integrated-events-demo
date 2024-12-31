import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTVComDistributionProviderBaseFilter, KalturaTVComDistributionProviderBaseFilterArgs } from './KalturaTVComDistributionProviderBaseFilter';
export interface KalturaTVComDistributionProviderFilterArgs extends KalturaTVComDistributionProviderBaseFilterArgs {
}
export declare class KalturaTVComDistributionProviderFilter extends KalturaTVComDistributionProviderBaseFilter {
    constructor(data?: KalturaTVComDistributionProviderFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

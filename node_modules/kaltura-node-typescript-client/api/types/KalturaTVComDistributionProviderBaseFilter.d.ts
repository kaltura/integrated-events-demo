import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDistributionProviderFilter, KalturaDistributionProviderFilterArgs } from './KalturaDistributionProviderFilter';
export interface KalturaTVComDistributionProviderBaseFilterArgs extends KalturaDistributionProviderFilterArgs {
}
export declare class KalturaTVComDistributionProviderBaseFilter extends KalturaDistributionProviderFilter {
    constructor(data?: KalturaTVComDistributionProviderBaseFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

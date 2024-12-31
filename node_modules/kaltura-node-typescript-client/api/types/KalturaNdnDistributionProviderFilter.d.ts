import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaNdnDistributionProviderBaseFilter, KalturaNdnDistributionProviderBaseFilterArgs } from './KalturaNdnDistributionProviderBaseFilter';
export interface KalturaNdnDistributionProviderFilterArgs extends KalturaNdnDistributionProviderBaseFilterArgs {
}
export declare class KalturaNdnDistributionProviderFilter extends KalturaNdnDistributionProviderBaseFilter {
    constructor(data?: KalturaNdnDistributionProviderFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

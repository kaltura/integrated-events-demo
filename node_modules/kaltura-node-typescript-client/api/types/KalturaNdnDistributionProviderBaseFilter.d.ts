import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDistributionProviderFilter, KalturaDistributionProviderFilterArgs } from './KalturaDistributionProviderFilter';
export interface KalturaNdnDistributionProviderBaseFilterArgs extends KalturaDistributionProviderFilterArgs {
}
export declare class KalturaNdnDistributionProviderBaseFilter extends KalturaDistributionProviderFilter {
    constructor(data?: KalturaNdnDistributionProviderBaseFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

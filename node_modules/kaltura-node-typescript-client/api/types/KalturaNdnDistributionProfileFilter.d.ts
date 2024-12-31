import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaNdnDistributionProfileBaseFilter, KalturaNdnDistributionProfileBaseFilterArgs } from './KalturaNdnDistributionProfileBaseFilter';
export interface KalturaNdnDistributionProfileFilterArgs extends KalturaNdnDistributionProfileBaseFilterArgs {
}
export declare class KalturaNdnDistributionProfileFilter extends KalturaNdnDistributionProfileBaseFilter {
    constructor(data?: KalturaNdnDistributionProfileFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

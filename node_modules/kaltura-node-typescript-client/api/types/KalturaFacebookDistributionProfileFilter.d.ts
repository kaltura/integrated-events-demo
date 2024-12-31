import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaFacebookDistributionProfileBaseFilter, KalturaFacebookDistributionProfileBaseFilterArgs } from './KalturaFacebookDistributionProfileBaseFilter';
export interface KalturaFacebookDistributionProfileFilterArgs extends KalturaFacebookDistributionProfileBaseFilterArgs {
}
export declare class KalturaFacebookDistributionProfileFilter extends KalturaFacebookDistributionProfileBaseFilter {
    constructor(data?: KalturaFacebookDistributionProfileFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

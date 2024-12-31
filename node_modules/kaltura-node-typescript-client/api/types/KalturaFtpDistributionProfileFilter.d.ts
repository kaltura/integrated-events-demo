import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaFtpDistributionProfileBaseFilter, KalturaFtpDistributionProfileBaseFilterArgs } from './KalturaFtpDistributionProfileBaseFilter';
export interface KalturaFtpDistributionProfileFilterArgs extends KalturaFtpDistributionProfileBaseFilterArgs {
}
export declare class KalturaFtpDistributionProfileFilter extends KalturaFtpDistributionProfileBaseFilter {
    constructor(data?: KalturaFtpDistributionProfileFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

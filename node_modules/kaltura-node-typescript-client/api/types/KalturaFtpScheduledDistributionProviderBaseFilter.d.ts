import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaFtpDistributionProviderFilter, KalturaFtpDistributionProviderFilterArgs } from './KalturaFtpDistributionProviderFilter';
export interface KalturaFtpScheduledDistributionProviderBaseFilterArgs extends KalturaFtpDistributionProviderFilterArgs {
}
export declare class KalturaFtpScheduledDistributionProviderBaseFilter extends KalturaFtpDistributionProviderFilter {
    constructor(data?: KalturaFtpScheduledDistributionProviderBaseFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

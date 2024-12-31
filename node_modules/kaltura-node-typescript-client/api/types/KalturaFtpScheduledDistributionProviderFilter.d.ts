import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaFtpScheduledDistributionProviderBaseFilter, KalturaFtpScheduledDistributionProviderBaseFilterArgs } from './KalturaFtpScheduledDistributionProviderBaseFilter';
export interface KalturaFtpScheduledDistributionProviderFilterArgs extends KalturaFtpScheduledDistributionProviderBaseFilterArgs {
}
export declare class KalturaFtpScheduledDistributionProviderFilter extends KalturaFtpScheduledDistributionProviderBaseFilter {
    constructor(data?: KalturaFtpScheduledDistributionProviderFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

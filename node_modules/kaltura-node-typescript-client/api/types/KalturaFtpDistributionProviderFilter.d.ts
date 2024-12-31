import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaFtpDistributionProviderBaseFilter, KalturaFtpDistributionProviderBaseFilterArgs } from './KalturaFtpDistributionProviderBaseFilter';
export interface KalturaFtpDistributionProviderFilterArgs extends KalturaFtpDistributionProviderBaseFilterArgs {
}
export declare class KalturaFtpDistributionProviderFilter extends KalturaFtpDistributionProviderBaseFilter {
    constructor(data?: KalturaFtpDistributionProviderFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

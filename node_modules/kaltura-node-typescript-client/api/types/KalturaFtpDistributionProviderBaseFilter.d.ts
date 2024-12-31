import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDistributionProviderFilter, KalturaDistributionProviderFilterArgs } from './KalturaDistributionProviderFilter';
export interface KalturaFtpDistributionProviderBaseFilterArgs extends KalturaDistributionProviderFilterArgs {
}
export declare class KalturaFtpDistributionProviderBaseFilter extends KalturaDistributionProviderFilter {
    constructor(data?: KalturaFtpDistributionProviderBaseFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

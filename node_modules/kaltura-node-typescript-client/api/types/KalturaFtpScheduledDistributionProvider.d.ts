import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaFtpDistributionProvider, KalturaFtpDistributionProviderArgs } from './KalturaFtpDistributionProvider';
export interface KalturaFtpScheduledDistributionProviderArgs extends KalturaFtpDistributionProviderArgs {
}
export declare class KalturaFtpScheduledDistributionProvider extends KalturaFtpDistributionProvider {
    constructor(data?: KalturaFtpScheduledDistributionProviderArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDistributionProvider, KalturaDistributionProviderArgs } from './KalturaDistributionProvider';
export interface KalturaFtpDistributionProviderArgs extends KalturaDistributionProviderArgs {
}
export declare class KalturaFtpDistributionProvider extends KalturaDistributionProvider {
    constructor(data?: KalturaFtpDistributionProviderArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

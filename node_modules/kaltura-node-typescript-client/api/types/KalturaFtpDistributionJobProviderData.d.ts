import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaFtpDistributionFile } from './KalturaFtpDistributionFile';
import { KalturaConfigurableDistributionJobProviderData, KalturaConfigurableDistributionJobProviderDataArgs } from './KalturaConfigurableDistributionJobProviderData';
export interface KalturaFtpDistributionJobProviderDataArgs extends KalturaConfigurableDistributionJobProviderDataArgs {
    filesForDistribution?: KalturaFtpDistributionFile[];
}
export declare class KalturaFtpDistributionJobProviderData extends KalturaConfigurableDistributionJobProviderData {
    filesForDistribution: KalturaFtpDistributionFile[];
    constructor(data?: KalturaFtpDistributionJobProviderDataArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

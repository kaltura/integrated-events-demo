import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaConfigurableDistributionProfile, KalturaConfigurableDistributionProfileArgs } from './KalturaConfigurableDistributionProfile';
export interface KalturaVerizonVcastDistributionProfileArgs extends KalturaConfigurableDistributionProfileArgs {
    ftpHost?: string;
    ftpLogin?: string;
    ftpPass?: string;
    providerName?: string;
    providerId?: string;
    entitlement?: string;
    priority?: string;
    allowStreaming?: string;
    streamingPriceCode?: string;
    allowDownload?: string;
    downloadPriceCode?: string;
}
export declare class KalturaVerizonVcastDistributionProfile extends KalturaConfigurableDistributionProfile {
    ftpHost: string;
    ftpLogin: string;
    ftpPass: string;
    providerName: string;
    providerId: string;
    entitlement: string;
    priority: string;
    allowStreaming: string;
    streamingPriceCode: string;
    allowDownload: string;
    downloadPriceCode: string;
    constructor(data?: KalturaVerizonVcastDistributionProfileArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaConfigurableDistributionProfile, KalturaConfigurableDistributionProfileArgs } from './KalturaConfigurableDistributionProfile';
export interface KalturaMetroPcsDistributionProfileArgs extends KalturaConfigurableDistributionProfileArgs {
    ftpHost?: string;
    ftpLogin?: string;
    ftpPass?: string;
    ftpPath?: string;
    providerName?: string;
    providerId?: string;
    copyright?: string;
    entitlements?: string;
    rating?: string;
    itemType?: string;
}
export declare class KalturaMetroPcsDistributionProfile extends KalturaConfigurableDistributionProfile {
    ftpHost: string;
    ftpLogin: string;
    ftpPass: string;
    ftpPath: string;
    providerName: string;
    providerId: string;
    copyright: string;
    entitlements: string;
    rating: string;
    itemType: string;
    constructor(data?: KalturaMetroPcsDistributionProfileArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

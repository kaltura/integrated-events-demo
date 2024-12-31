import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaConfigurableDistributionProfile, KalturaConfigurableDistributionProfileArgs } from './KalturaConfigurableDistributionProfile';
export interface KalturaFreewheelGenericDistributionProfileArgs extends KalturaConfigurableDistributionProfileArgs {
    apikey?: string;
    email?: string;
    sftpPass?: string;
    sftpLogin?: string;
    contentOwner?: string;
    upstreamVideoId?: string;
    upstreamNetworkName?: string;
    upstreamNetworkId?: string;
    categoryId?: string;
    replaceGroup?: boolean;
    replaceAirDates?: boolean;
}
export declare class KalturaFreewheelGenericDistributionProfile extends KalturaConfigurableDistributionProfile {
    apikey: string;
    email: string;
    sftpPass: string;
    sftpLogin: string;
    contentOwner: string;
    upstreamVideoId: string;
    upstreamNetworkName: string;
    upstreamNetworkId: string;
    categoryId: string;
    replaceGroup: boolean;
    replaceAirDates: boolean;
    constructor(data?: KalturaFreewheelGenericDistributionProfileArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

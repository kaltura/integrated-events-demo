import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaConfigurableDistributionProfile, KalturaConfigurableDistributionProfileArgs } from './KalturaConfigurableDistributionProfile';
export interface KalturaUnicornDistributionProfileArgs extends KalturaConfigurableDistributionProfileArgs {
    username?: string;
    password?: string;
    domainName?: string;
    channelGuid?: string;
    apiHostUrl?: string;
    domainGuid?: string;
    adFreeApplicationGuid?: string;
    remoteAssetParamsId?: number;
    storageProfileId?: string;
}
export declare class KalturaUnicornDistributionProfile extends KalturaConfigurableDistributionProfile {
    username: string;
    password: string;
    domainName: string;
    channelGuid: string;
    apiHostUrl: string;
    domainGuid: string;
    adFreeApplicationGuid: string;
    remoteAssetParamsId: number;
    storageProfileId: string;
    constructor(data?: KalturaUnicornDistributionProfileArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

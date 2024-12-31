import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaString } from './KalturaString';
import { KalturaDistributionProtocol } from './KalturaDistributionProtocol';
import { KalturaConfigurableDistributionProfile, KalturaConfigurableDistributionProfileArgs } from './KalturaConfigurableDistributionProfile';
export interface KalturaHuluDistributionProfileArgs extends KalturaConfigurableDistributionProfileArgs {
    sftpHost?: string;
    sftpLogin?: string;
    sftpPass?: string;
    seriesChannel?: string;
    seriesPrimaryCategory?: string;
    seriesAdditionalCategories?: KalturaString[];
    seasonNumber?: string;
    seasonSynopsis?: string;
    seasonTuneInInformation?: string;
    videoMediaType?: string;
    disableEpisodeNumberCustomValidation?: boolean;
    protocol?: KalturaDistributionProtocol;
    asperaHost?: string;
    asperaLogin?: string;
    asperaPass?: string;
    port?: number;
    passphrase?: string;
    asperaPublicKey?: string;
    asperaPrivateKey?: string;
}
export declare class KalturaHuluDistributionProfile extends KalturaConfigurableDistributionProfile {
    sftpHost: string;
    sftpLogin: string;
    sftpPass: string;
    seriesChannel: string;
    seriesPrimaryCategory: string;
    seriesAdditionalCategories: KalturaString[];
    seasonNumber: string;
    seasonSynopsis: string;
    seasonTuneInInformation: string;
    videoMediaType: string;
    disableEpisodeNumberCustomValidation: boolean;
    protocol: KalturaDistributionProtocol;
    asperaHost: string;
    asperaLogin: string;
    asperaPass: string;
    port: number;
    passphrase: string;
    asperaPublicKey: string;
    asperaPrivateKey: string;
    constructor(data?: KalturaHuluDistributionProfileArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

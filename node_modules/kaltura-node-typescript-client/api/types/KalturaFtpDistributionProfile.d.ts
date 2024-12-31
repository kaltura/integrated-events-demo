import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDistributionProtocol } from './KalturaDistributionProtocol';
import { KalturaConfigurableDistributionProfile, KalturaConfigurableDistributionProfileArgs } from './KalturaConfigurableDistributionProfile';
export interface KalturaFtpDistributionProfileArgs extends KalturaConfigurableDistributionProfileArgs {
    protocol?: KalturaDistributionProtocol;
    host?: string;
    port?: number;
    basePath?: string;
    username?: string;
    password?: string;
    passphrase?: string;
    sftpPublicKey?: string;
    sftpPrivateKey?: string;
    disableMetadata?: boolean;
    metadataXslt?: string;
    metadataFilenameXslt?: string;
    flavorAssetFilenameXslt?: string;
    thumbnailAssetFilenameXslt?: string;
    assetFilenameXslt?: string;
    asperaPublicKey?: string;
    asperaPrivateKey?: string;
    sendMetadataAfterAssets?: boolean;
}
export declare class KalturaFtpDistributionProfile extends KalturaConfigurableDistributionProfile {
    protocol: KalturaDistributionProtocol;
    host: string;
    port: number;
    basePath: string;
    username: string;
    password: string;
    passphrase: string;
    sftpPublicKey: string;
    sftpPrivateKey: string;
    disableMetadata: boolean;
    metadataXslt: string;
    metadataFilenameXslt: string;
    flavorAssetFilenameXslt: string;
    thumbnailAssetFilenameXslt: string;
    assetFilenameXslt: string;
    asperaPublicKey: string;
    asperaPrivateKey: string;
    sendMetadataAfterAssets: boolean;
    constructor(data?: KalturaFtpDistributionProfileArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

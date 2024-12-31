import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaJobData, KalturaJobDataArgs } from './KalturaJobData';
export interface KalturaStorageJobDataArgs extends KalturaJobDataArgs {
    serverUrl?: string;
    serverUsername?: string;
    serverPassword?: string;
    serverPrivateKey?: string;
    serverPublicKey?: string;
    serverPassPhrase?: string;
    ftpPassiveMode?: boolean;
    srcFileSyncLocalPath?: string;
    srcFileEncryptionKey?: string;
    srcFileSyncId?: string;
    destFileSyncStoredPath?: string;
}
export declare class KalturaStorageJobData extends KalturaJobData {
    serverUrl: string;
    serverUsername: string;
    serverPassword: string;
    serverPrivateKey: string;
    serverPublicKey: string;
    serverPassPhrase: string;
    ftpPassiveMode: boolean;
    srcFileSyncLocalPath: string;
    srcFileEncryptionKey: string;
    srcFileSyncId: string;
    destFileSyncStoredPath: string;
    constructor(data?: KalturaStorageJobDataArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

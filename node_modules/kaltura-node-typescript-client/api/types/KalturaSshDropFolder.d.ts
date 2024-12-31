import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaRemoteDropFolder, KalturaRemoteDropFolderArgs } from './KalturaRemoteDropFolder';
export interface KalturaSshDropFolderArgs extends KalturaRemoteDropFolderArgs {
    host?: string;
    port?: number;
    username?: string;
    password?: string;
    privateKey?: string;
    publicKey?: string;
    passPhrase?: string;
}
export declare class KalturaSshDropFolder extends KalturaRemoteDropFolder {
    host: string;
    port: number;
    username: string;
    password: string;
    privateKey: string;
    publicKey: string;
    passPhrase: string;
    constructor(data?: KalturaSshDropFolderArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

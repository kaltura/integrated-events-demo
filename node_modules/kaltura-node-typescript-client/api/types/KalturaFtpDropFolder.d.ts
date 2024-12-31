import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaRemoteDropFolder, KalturaRemoteDropFolderArgs } from './KalturaRemoteDropFolder';
export interface KalturaFtpDropFolderArgs extends KalturaRemoteDropFolderArgs {
    host?: string;
    port?: number;
    username?: string;
    password?: string;
}
export declare class KalturaFtpDropFolder extends KalturaRemoteDropFolder {
    host: string;
    port: number;
    username: string;
    password: string;
    constructor(data?: KalturaFtpDropFolderArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

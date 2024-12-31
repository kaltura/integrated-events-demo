import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDropFolder, KalturaDropFolderArgs } from './KalturaDropFolder';
export interface KalturaRemoteDropFolderArgs extends KalturaDropFolderArgs {
}
export declare class KalturaRemoteDropFolder extends KalturaDropFolder {
    constructor(data?: KalturaRemoteDropFolderArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

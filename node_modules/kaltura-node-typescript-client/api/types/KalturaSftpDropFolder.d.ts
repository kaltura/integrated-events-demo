import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaSshDropFolder, KalturaSshDropFolderArgs } from './KalturaSshDropFolder';
export interface KalturaSftpDropFolderArgs extends KalturaSshDropFolderArgs {
}
export declare class KalturaSftpDropFolder extends KalturaSshDropFolder {
    constructor(data?: KalturaSftpDropFolderArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaSftpDropFolder, KalturaSftpDropFolderArgs } from './KalturaSftpDropFolder';
export interface KalturaTrRdsDropFolderArgs extends KalturaSftpDropFolderArgs {
    syncMetadataProfile?: number;
    targetMetadataProfile?: number;
}
export declare class KalturaTrRdsDropFolder extends KalturaSftpDropFolder {
    syncMetadataProfile: number;
    targetMetadataProfile: number;
    constructor(data?: KalturaTrRdsDropFolderArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaSftpDropFolderBaseFilter, KalturaSftpDropFolderBaseFilterArgs } from './KalturaSftpDropFolderBaseFilter';
export interface KalturaSftpDropFolderFilterArgs extends KalturaSftpDropFolderBaseFilterArgs {
}
export declare class KalturaSftpDropFolderFilter extends KalturaSftpDropFolderBaseFilter {
    constructor(data?: KalturaSftpDropFolderFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

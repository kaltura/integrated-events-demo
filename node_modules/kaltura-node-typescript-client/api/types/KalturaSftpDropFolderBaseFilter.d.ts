import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaSshDropFolderFilter, KalturaSshDropFolderFilterArgs } from './KalturaSshDropFolderFilter';
export interface KalturaSftpDropFolderBaseFilterArgs extends KalturaSshDropFolderFilterArgs {
}
export declare class KalturaSftpDropFolderBaseFilter extends KalturaSshDropFolderFilter {
    constructor(data?: KalturaSftpDropFolderBaseFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

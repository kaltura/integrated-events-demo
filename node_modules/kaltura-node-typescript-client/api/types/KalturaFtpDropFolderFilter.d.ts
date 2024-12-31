import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaFtpDropFolderBaseFilter, KalturaFtpDropFolderBaseFilterArgs } from './KalturaFtpDropFolderBaseFilter';
export interface KalturaFtpDropFolderFilterArgs extends KalturaFtpDropFolderBaseFilterArgs {
}
export declare class KalturaFtpDropFolderFilter extends KalturaFtpDropFolderBaseFilter {
    constructor(data?: KalturaFtpDropFolderFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaRemoteDropFolderFilter, KalturaRemoteDropFolderFilterArgs } from './KalturaRemoteDropFolderFilter';
export interface KalturaFtpDropFolderBaseFilterArgs extends KalturaRemoteDropFolderFilterArgs {
}
export declare class KalturaFtpDropFolderBaseFilter extends KalturaRemoteDropFolderFilter {
    constructor(data?: KalturaFtpDropFolderBaseFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

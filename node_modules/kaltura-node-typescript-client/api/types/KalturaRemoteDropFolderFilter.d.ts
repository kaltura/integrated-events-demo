import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaRemoteDropFolderBaseFilter, KalturaRemoteDropFolderBaseFilterArgs } from './KalturaRemoteDropFolderBaseFilter';
export interface KalturaRemoteDropFolderFilterArgs extends KalturaRemoteDropFolderBaseFilterArgs {
}
export declare class KalturaRemoteDropFolderFilter extends KalturaRemoteDropFolderBaseFilter {
    constructor(data?: KalturaRemoteDropFolderFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDropFolderFilter, KalturaDropFolderFilterArgs } from './KalturaDropFolderFilter';
export interface KalturaRemoteDropFolderBaseFilterArgs extends KalturaDropFolderFilterArgs {
}
export declare class KalturaRemoteDropFolderBaseFilter extends KalturaDropFolderFilter {
    constructor(data?: KalturaRemoteDropFolderBaseFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaRemoteDropFolderFilter, KalturaRemoteDropFolderFilterArgs } from './KalturaRemoteDropFolderFilter';
export interface KalturaSshDropFolderBaseFilterArgs extends KalturaRemoteDropFolderFilterArgs {
}
export declare class KalturaSshDropFolderBaseFilter extends KalturaRemoteDropFolderFilter {
    constructor(data?: KalturaSshDropFolderBaseFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

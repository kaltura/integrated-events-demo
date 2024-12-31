import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDropFolderFile } from './KalturaDropFolderFile';
import { KalturaListResponse, KalturaListResponseArgs } from './KalturaListResponse';
export interface KalturaDropFolderFileListResponseArgs extends KalturaListResponseArgs {
}
export declare class KalturaDropFolderFileListResponse extends KalturaListResponse {
    readonly objects: KalturaDropFolderFile[];
    constructor(data?: KalturaDropFolderFileListResponseArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

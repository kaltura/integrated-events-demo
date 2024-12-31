import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDropFolder } from './KalturaDropFolder';
import { KalturaListResponse, KalturaListResponseArgs } from './KalturaListResponse';
export interface KalturaDropFolderListResponseArgs extends KalturaListResponseArgs {
}
export declare class KalturaDropFolderListResponse extends KalturaListResponse {
    readonly objects: KalturaDropFolder[];
    constructor(data?: KalturaDropFolderListResponseArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

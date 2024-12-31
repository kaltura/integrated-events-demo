import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaRemotePath } from './KalturaRemotePath';
import { KalturaListResponse, KalturaListResponseArgs } from './KalturaListResponse';
export interface KalturaRemotePathListResponseArgs extends KalturaListResponseArgs {
}
export declare class KalturaRemotePathListResponse extends KalturaListResponse {
    readonly objects: KalturaRemotePath[];
    constructor(data?: KalturaRemotePathListResponseArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

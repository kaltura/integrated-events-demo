import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaGroupUser } from './KalturaGroupUser';
import { KalturaListResponse, KalturaListResponseArgs } from './KalturaListResponse';
export interface KalturaGroupUserListResponseArgs extends KalturaListResponseArgs {
}
export declare class KalturaGroupUserListResponse extends KalturaListResponse {
    readonly objects: KalturaGroupUser[];
    constructor(data?: KalturaGroupUserListResponseArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

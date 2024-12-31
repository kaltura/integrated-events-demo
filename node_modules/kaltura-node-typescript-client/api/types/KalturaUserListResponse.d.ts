import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaUser } from './KalturaUser';
import { KalturaListResponse, KalturaListResponseArgs } from './KalturaListResponse';
export interface KalturaUserListResponseArgs extends KalturaListResponseArgs {
}
export declare class KalturaUserListResponse extends KalturaListResponse {
    readonly objects: KalturaUser[];
    constructor(data?: KalturaUserListResponseArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

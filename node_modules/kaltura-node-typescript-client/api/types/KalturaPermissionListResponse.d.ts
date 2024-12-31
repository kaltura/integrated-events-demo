import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaPermission } from './KalturaPermission';
import { KalturaListResponse, KalturaListResponseArgs } from './KalturaListResponse';
export interface KalturaPermissionListResponseArgs extends KalturaListResponseArgs {
}
export declare class KalturaPermissionListResponse extends KalturaListResponse {
    readonly objects: KalturaPermission[];
    constructor(data?: KalturaPermissionListResponseArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

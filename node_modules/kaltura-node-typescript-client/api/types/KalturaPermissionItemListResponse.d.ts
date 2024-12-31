import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaPermissionItem } from './KalturaPermissionItem';
import { KalturaListResponse, KalturaListResponseArgs } from './KalturaListResponse';
export interface KalturaPermissionItemListResponseArgs extends KalturaListResponseArgs {
}
export declare class KalturaPermissionItemListResponse extends KalturaListResponse {
    readonly objects: KalturaPermissionItem[];
    constructor(data?: KalturaPermissionItemListResponseArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

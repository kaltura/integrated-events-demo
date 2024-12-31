import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaAccessControl } from './KalturaAccessControl';
import { KalturaListResponse, KalturaListResponseArgs } from './KalturaListResponse';
export interface KalturaAccessControlListResponseArgs extends KalturaListResponseArgs {
}
export declare class KalturaAccessControlListResponse extends KalturaListResponse {
    readonly objects: KalturaAccessControl[];
    constructor(data?: KalturaAccessControlListResponseArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

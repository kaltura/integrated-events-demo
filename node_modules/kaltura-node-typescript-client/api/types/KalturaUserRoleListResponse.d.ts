import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaUserRole } from './KalturaUserRole';
import { KalturaListResponse, KalturaListResponseArgs } from './KalturaListResponse';
export interface KalturaUserRoleListResponseArgs extends KalturaListResponseArgs {
}
export declare class KalturaUserRoleListResponse extends KalturaListResponse {
    readonly objects: KalturaUserRole[];
    constructor(data?: KalturaUserRoleListResponseArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

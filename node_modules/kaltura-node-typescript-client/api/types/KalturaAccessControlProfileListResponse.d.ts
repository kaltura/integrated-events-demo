import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaAccessControlProfile } from './KalturaAccessControlProfile';
import { KalturaListResponse, KalturaListResponseArgs } from './KalturaListResponse';
export interface KalturaAccessControlProfileListResponseArgs extends KalturaListResponseArgs {
}
export declare class KalturaAccessControlProfileListResponse extends KalturaListResponse {
    readonly objects: KalturaAccessControlProfile[];
    constructor(data?: KalturaAccessControlProfileListResponseArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

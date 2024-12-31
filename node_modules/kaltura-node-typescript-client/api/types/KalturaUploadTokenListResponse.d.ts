import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaUploadToken } from './KalturaUploadToken';
import { KalturaListResponse, KalturaListResponseArgs } from './KalturaListResponse';
export interface KalturaUploadTokenListResponseArgs extends KalturaListResponseArgs {
}
export declare class KalturaUploadTokenListResponse extends KalturaListResponse {
    readonly objects: KalturaUploadToken[];
    constructor(data?: KalturaUploadTokenListResponseArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

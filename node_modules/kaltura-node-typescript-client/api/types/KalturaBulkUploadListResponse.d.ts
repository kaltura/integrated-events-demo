import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaBulkUpload } from './KalturaBulkUpload';
import { KalturaListResponse, KalturaListResponseArgs } from './KalturaListResponse';
export interface KalturaBulkUploadListResponseArgs extends KalturaListResponseArgs {
}
export declare class KalturaBulkUploadListResponse extends KalturaListResponse {
    readonly objects: KalturaBulkUpload[];
    constructor(data?: KalturaBulkUploadListResponseArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

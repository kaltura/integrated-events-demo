import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaAttachmentAsset } from './KalturaAttachmentAsset';
import { KalturaListResponse, KalturaListResponseArgs } from './KalturaListResponse';
export interface KalturaAttachmentAssetListResponseArgs extends KalturaListResponseArgs {
}
export declare class KalturaAttachmentAssetListResponse extends KalturaListResponse {
    readonly objects: KalturaAttachmentAsset[];
    constructor(data?: KalturaAttachmentAssetListResponseArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

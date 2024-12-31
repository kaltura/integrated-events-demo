import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaAttachmentType } from './KalturaAttachmentType';
import { KalturaAttachmentAssetStatus } from './KalturaAttachmentAssetStatus';
import { KalturaAsset, KalturaAssetArgs } from './KalturaAsset';
export interface KalturaAttachmentAssetArgs extends KalturaAssetArgs {
    filename?: string;
    title?: string;
    format?: KalturaAttachmentType;
}
export declare class KalturaAttachmentAsset extends KalturaAsset {
    filename: string;
    title: string;
    format: KalturaAttachmentType;
    readonly status: KalturaAttachmentAssetStatus;
    constructor(data?: KalturaAttachmentAssetArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

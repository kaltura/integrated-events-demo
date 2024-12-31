import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaAttachmentType } from './KalturaAttachmentType';
import { KalturaAttachmentAssetStatus } from './KalturaAttachmentAssetStatus';
import { KalturaAssetFilter, KalturaAssetFilterArgs } from './KalturaAssetFilter';
export interface KalturaAttachmentAssetBaseFilterArgs extends KalturaAssetFilterArgs {
    formatEqual?: KalturaAttachmentType;
    formatIn?: string;
    statusEqual?: KalturaAttachmentAssetStatus;
    statusIn?: string;
    statusNotIn?: string;
}
export declare class KalturaAttachmentAssetBaseFilter extends KalturaAssetFilter {
    formatEqual: KalturaAttachmentType;
    formatIn: string;
    statusEqual: KalturaAttachmentAssetStatus;
    statusIn: string;
    statusNotIn: string;
    constructor(data?: KalturaAttachmentAssetBaseFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

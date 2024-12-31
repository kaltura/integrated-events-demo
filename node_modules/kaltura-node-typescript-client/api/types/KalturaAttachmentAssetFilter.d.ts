import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaAttachmentAssetBaseFilter, KalturaAttachmentAssetBaseFilterArgs } from './KalturaAttachmentAssetBaseFilter';
export interface KalturaAttachmentAssetFilterArgs extends KalturaAttachmentAssetBaseFilterArgs {
}
export declare class KalturaAttachmentAssetFilter extends KalturaAttachmentAssetBaseFilter {
    constructor(data?: KalturaAttachmentAssetFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

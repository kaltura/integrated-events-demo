import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaAttachmentAssetFilter, KalturaAttachmentAssetFilterArgs } from './KalturaAttachmentAssetFilter';
export interface KalturaTranscriptAssetBaseFilterArgs extends KalturaAttachmentAssetFilterArgs {
}
export declare class KalturaTranscriptAssetBaseFilter extends KalturaAttachmentAssetFilter {
    constructor(data?: KalturaTranscriptAssetBaseFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaNullableBoolean } from './KalturaNullableBoolean';
import { KalturaLanguage } from './KalturaLanguage';
import { KalturaTranscriptProviderType } from './KalturaTranscriptProviderType';
import { KalturaAttachmentAsset, KalturaAttachmentAssetArgs } from './KalturaAttachmentAsset';
export interface KalturaTranscriptAssetArgs extends KalturaAttachmentAssetArgs {
    accuracy?: number;
    humanVerified?: KalturaNullableBoolean;
    language?: KalturaLanguage;
    providerType?: KalturaTranscriptProviderType;
}
export declare class KalturaTranscriptAsset extends KalturaAttachmentAsset {
    accuracy: number;
    humanVerified: KalturaNullableBoolean;
    language: KalturaLanguage;
    providerType: KalturaTranscriptProviderType;
    constructor(data?: KalturaTranscriptAssetArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaLanguage } from './KalturaLanguage';
import { KalturaIntegrationJobProviderData, KalturaIntegrationJobProviderDataArgs } from './KalturaIntegrationJobProviderData';
export interface KalturaVoicebaseJobProviderDataArgs extends KalturaIntegrationJobProviderDataArgs {
    entryId?: string;
    flavorAssetId?: string;
    transcriptId?: string;
    captionAssetFormats?: string;
    spokenLanguage?: KalturaLanguage;
    replaceMediaContent?: boolean;
}
export declare class KalturaVoicebaseJobProviderData extends KalturaIntegrationJobProviderData {
    entryId: string;
    flavorAssetId: string;
    transcriptId: string;
    captionAssetFormats: string;
    readonly apiKey: string;
    readonly apiPassword: string;
    spokenLanguage: KalturaLanguage;
    readonly fileLocation: string;
    replaceMediaContent: boolean;
    readonly additionalParameters: string;
    constructor(data?: KalturaVoicebaseJobProviderDataArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

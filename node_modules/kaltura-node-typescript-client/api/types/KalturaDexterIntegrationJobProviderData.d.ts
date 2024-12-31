import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaIntegrationJobProviderData, KalturaIntegrationJobProviderDataArgs } from './KalturaIntegrationJobProviderData';
export interface KalturaDexterIntegrationJobProviderDataArgs extends KalturaIntegrationJobProviderDataArgs {
    metadataProfileId?: number;
    transcriptAssetId?: string;
    entryId?: string;
    voicebaseApiKey?: string;
    voicebaseApiPassword?: string;
}
export declare class KalturaDexterIntegrationJobProviderData extends KalturaIntegrationJobProviderData {
    metadataProfileId: number;
    transcriptAssetId: string;
    entryId: string;
    voicebaseApiKey: string;
    voicebaseApiPassword: string;
    constructor(data?: KalturaDexterIntegrationJobProviderDataArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaCielo24Priority } from './KalturaCielo24Priority';
import { KalturaCielo24Fidelity } from './KalturaCielo24Fidelity';
import { KalturaLanguage } from './KalturaLanguage';
import { KalturaIntegrationJobProviderData, KalturaIntegrationJobProviderDataArgs } from './KalturaIntegrationJobProviderData';
export interface KalturaCielo24JobProviderDataArgs extends KalturaIntegrationJobProviderDataArgs {
    entryId?: string;
    flavorAssetId?: string;
    captionAssetFormats?: string;
    priority?: KalturaCielo24Priority;
    fidelity?: KalturaCielo24Fidelity;
    spokenLanguage?: KalturaLanguage;
    replaceMediaContent?: boolean;
    additionalParameters?: string;
}
export declare class KalturaCielo24JobProviderData extends KalturaIntegrationJobProviderData {
    entryId: string;
    flavorAssetId: string;
    captionAssetFormats: string;
    priority: KalturaCielo24Priority;
    fidelity: KalturaCielo24Fidelity;
    readonly username: string;
    readonly password: string;
    readonly baseUrl: string;
    spokenLanguage: KalturaLanguage;
    replaceMediaContent: boolean;
    additionalParameters: string;
    constructor(data?: KalturaCielo24JobProviderDataArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

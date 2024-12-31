import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaString } from './KalturaString';
import { KalturaRuleAction } from './KalturaRuleAction';
import { KalturaFlavorAsset } from './KalturaFlavorAsset';
import { KalturaPluginData } from './KalturaPluginData';
import { KalturaContextDataResult, KalturaContextDataResultArgs } from './KalturaContextDataResult';
export interface KalturaEntryContextDataResultArgs extends KalturaContextDataResultArgs {
    isSiteRestricted?: boolean;
    isCountryRestricted?: boolean;
    isSessionRestricted?: boolean;
    isIpAddressRestricted?: boolean;
    isUserAgentRestricted?: boolean;
    previewLength?: number;
    isScheduledNow?: boolean;
    isAdmin?: boolean;
    streamerType?: string;
    mediaProtocol?: string;
    storageProfilesXML?: string;
    accessControlMessages?: KalturaString[];
    accessControlActions?: KalturaRuleAction[];
    flavorAssets?: KalturaFlavorAsset[];
    msDuration?: number;
    pluginData?: {
        [key: string]: KalturaPluginData;
    };
}
export declare class KalturaEntryContextDataResult extends KalturaContextDataResult {
    isSiteRestricted: boolean;
    isCountryRestricted: boolean;
    isSessionRestricted: boolean;
    isIpAddressRestricted: boolean;
    isUserAgentRestricted: boolean;
    previewLength: number;
    isScheduledNow: boolean;
    isAdmin: boolean;
    streamerType: string;
    mediaProtocol: string;
    storageProfilesXML: string;
    accessControlMessages: KalturaString[];
    accessControlActions: KalturaRuleAction[];
    flavorAssets: KalturaFlavorAsset[];
    msDuration: number;
    pluginData: {
        [key: string]: KalturaPluginData;
    };
    constructor(data?: KalturaEntryContextDataResultArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

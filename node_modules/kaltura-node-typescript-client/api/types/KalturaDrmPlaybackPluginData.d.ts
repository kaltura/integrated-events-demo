import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDrmSchemeName } from './KalturaDrmSchemeName';
import { KalturaPluginData, KalturaPluginDataArgs } from './KalturaPluginData';
export interface KalturaDrmPlaybackPluginDataArgs extends KalturaPluginDataArgs {
    scheme?: KalturaDrmSchemeName;
    licenseURL?: string;
}
export declare class KalturaDrmPlaybackPluginData extends KalturaPluginData {
    scheme: KalturaDrmSchemeName;
    licenseURL: string;
    constructor(data?: KalturaDrmPlaybackPluginDataArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

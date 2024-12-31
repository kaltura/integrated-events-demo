import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaPluginData, KalturaPluginDataArgs } from './KalturaPluginData';
export interface KalturaFairplayEntryContextPluginDataArgs extends KalturaPluginDataArgs {
    publicCertificate?: string;
}
export declare class KalturaFairplayEntryContextPluginData extends KalturaPluginData {
    publicCertificate: string;
    constructor(data?: KalturaFairplayEntryContextPluginDataArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

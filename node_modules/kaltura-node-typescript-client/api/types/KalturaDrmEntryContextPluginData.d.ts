import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaPluginData, KalturaPluginDataArgs } from './KalturaPluginData';
export interface KalturaDrmEntryContextPluginDataArgs extends KalturaPluginDataArgs {
    flavorData?: string;
}
export declare class KalturaDrmEntryContextPluginData extends KalturaPluginData {
    flavorData: string;
    constructor(data?: KalturaDrmEntryContextPluginDataArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDrmPlaybackPluginData, KalturaDrmPlaybackPluginDataArgs } from './KalturaDrmPlaybackPluginData';
export interface KalturaFairPlayPlaybackPluginDataArgs extends KalturaDrmPlaybackPluginDataArgs {
    certificate?: string;
}
export declare class KalturaFairPlayPlaybackPluginData extends KalturaDrmPlaybackPluginData {
    certificate: string;
    constructor(data?: KalturaFairPlayPlaybackPluginDataArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

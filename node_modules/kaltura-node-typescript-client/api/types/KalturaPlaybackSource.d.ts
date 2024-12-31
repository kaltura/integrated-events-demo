import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDrmPlaybackPluginData } from './KalturaDrmPlaybackPluginData';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';
export interface KalturaPlaybackSourceArgs extends KalturaObjectBaseArgs {
    deliveryProfileId?: string;
    format?: string;
    protocols?: string;
    flavorIds?: string;
    url?: string;
    drm?: KalturaDrmPlaybackPluginData[];
}
export declare class KalturaPlaybackSource extends KalturaObjectBase {
    deliveryProfileId: string;
    format: string;
    protocols: string;
    flavorIds: string;
    url: string;
    drm: KalturaDrmPlaybackPluginData[];
    constructor(data?: KalturaPlaybackSourceArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

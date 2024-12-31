import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';
export interface KalturaLiveStreamBitrateArgs extends KalturaObjectBaseArgs {
    bitrate?: number;
    width?: number;
    height?: number;
    tags?: string;
}
export declare class KalturaLiveStreamBitrate extends KalturaObjectBase {
    bitrate: number;
    width: number;
    height: number;
    tags: string;
    constructor(data?: KalturaLiveStreamBitrateArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

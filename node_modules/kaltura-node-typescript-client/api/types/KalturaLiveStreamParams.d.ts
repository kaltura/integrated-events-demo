import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';
export interface KalturaLiveStreamParamsArgs extends KalturaObjectBaseArgs {
    bitrate?: number;
    flavorId?: string;
    width?: number;
    height?: number;
    codec?: string;
    frameRate?: number;
    keyFrameInterval?: number;
    language?: string;
}
export declare class KalturaLiveStreamParams extends KalturaObjectBase {
    bitrate: number;
    flavorId: string;
    width: number;
    height: number;
    codec: string;
    frameRate: number;
    keyFrameInterval: number;
    language: string;
    constructor(data?: KalturaLiveStreamParamsArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

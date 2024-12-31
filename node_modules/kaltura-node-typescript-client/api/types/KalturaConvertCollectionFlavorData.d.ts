import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';
export interface KalturaConvertCollectionFlavorDataArgs extends KalturaObjectBaseArgs {
    flavorAssetId?: string;
    flavorParamsOutputId?: number;
    readyBehavior?: number;
    videoBitrate?: number;
    audioBitrate?: number;
    destFileSyncLocalPath?: string;
    destFileSyncRemoteUrl?: string;
}
export declare class KalturaConvertCollectionFlavorData extends KalturaObjectBase {
    flavorAssetId: string;
    flavorParamsOutputId: number;
    readyBehavior: number;
    videoBitrate: number;
    audioBitrate: number;
    destFileSyncLocalPath: string;
    destFileSyncRemoteUrl: string;
    constructor(data?: KalturaConvertCollectionFlavorDataArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

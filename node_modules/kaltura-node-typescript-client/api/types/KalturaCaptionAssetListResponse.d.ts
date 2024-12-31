import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaCaptionAsset } from './KalturaCaptionAsset';
import { KalturaListResponse, KalturaListResponseArgs } from './KalturaListResponse';
export interface KalturaCaptionAssetListResponseArgs extends KalturaListResponseArgs {
}
export declare class KalturaCaptionAssetListResponse extends KalturaListResponse {
    readonly objects: KalturaCaptionAsset[];
    constructor(data?: KalturaCaptionAssetListResponseArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

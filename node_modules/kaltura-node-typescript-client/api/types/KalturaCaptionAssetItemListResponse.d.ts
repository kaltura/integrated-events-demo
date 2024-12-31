import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaCaptionAssetItem } from './KalturaCaptionAssetItem';
import { KalturaListResponse, KalturaListResponseArgs } from './KalturaListResponse';
export interface KalturaCaptionAssetItemListResponseArgs extends KalturaListResponseArgs {
}
export declare class KalturaCaptionAssetItemListResponse extends KalturaListResponse {
    readonly objects: KalturaCaptionAssetItem[];
    constructor(data?: KalturaCaptionAssetItemListResponseArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

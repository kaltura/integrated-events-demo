import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaThumbAsset } from './KalturaThumbAsset';
import { KalturaListResponse, KalturaListResponseArgs } from './KalturaListResponse';
export interface KalturaThumbAssetListResponseArgs extends KalturaListResponseArgs {
}
export declare class KalturaThumbAssetListResponse extends KalturaListResponse {
    readonly objects: KalturaThumbAsset[];
    constructor(data?: KalturaThumbAssetListResponseArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

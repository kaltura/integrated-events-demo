import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaFileAsset } from './KalturaFileAsset';
import { KalturaListResponse, KalturaListResponseArgs } from './KalturaListResponse';
export interface KalturaFileAssetListResponseArgs extends KalturaListResponseArgs {
}
export declare class KalturaFileAssetListResponse extends KalturaListResponse {
    readonly objects: KalturaFileAsset[];
    constructor(data?: KalturaFileAssetListResponseArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

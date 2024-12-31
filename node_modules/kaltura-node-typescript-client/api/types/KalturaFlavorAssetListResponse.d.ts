import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaFlavorAsset } from './KalturaFlavorAsset';
import { KalturaListResponse, KalturaListResponseArgs } from './KalturaListResponse';
export interface KalturaFlavorAssetListResponseArgs extends KalturaListResponseArgs {
}
export declare class KalturaFlavorAssetListResponse extends KalturaListResponse {
    readonly objects: KalturaFlavorAsset[];
    constructor(data?: KalturaFlavorAssetListResponseArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

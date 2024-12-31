import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaThumbAssetStatus } from './KalturaThumbAssetStatus';
import { KalturaAsset, KalturaAssetArgs } from './KalturaAsset';
export interface KalturaThumbAssetArgs extends KalturaAssetArgs {
    thumbParamsId?: number;
}
export declare class KalturaThumbAsset extends KalturaAsset {
    thumbParamsId: number;
    readonly width: number;
    readonly height: number;
    readonly status: KalturaThumbAssetStatus;
    constructor(data?: KalturaThumbAssetArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

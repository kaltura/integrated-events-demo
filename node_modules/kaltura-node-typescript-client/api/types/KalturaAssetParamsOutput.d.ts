import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaContainerFormat } from './KalturaContainerFormat';
import { KalturaAssetParams, KalturaAssetParamsArgs } from './KalturaAssetParams';
export interface KalturaAssetParamsOutputArgs extends KalturaAssetParamsArgs {
    assetParamsId?: number;
    assetParamsVersion?: string;
    assetId?: string;
    assetVersion?: string;
    readyBehavior?: number;
    format?: KalturaContainerFormat;
}
export declare class KalturaAssetParamsOutput extends KalturaAssetParams {
    assetParamsId: number;
    assetParamsVersion: string;
    assetId: string;
    assetVersion: string;
    readyBehavior: number;
    format: KalturaContainerFormat;
    constructor(data?: KalturaAssetParamsOutputArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

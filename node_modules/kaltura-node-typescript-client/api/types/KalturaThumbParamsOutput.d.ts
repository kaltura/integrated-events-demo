import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaThumbParams, KalturaThumbParamsArgs } from './KalturaThumbParams';
export interface KalturaThumbParamsOutputArgs extends KalturaThumbParamsArgs {
    thumbParamsId?: number;
    thumbParamsVersion?: string;
    thumbAssetId?: string;
    thumbAssetVersion?: string;
    rotate?: number;
}
export declare class KalturaThumbParamsOutput extends KalturaThumbParams {
    thumbParamsId: number;
    thumbParamsVersion: string;
    thumbAssetId: string;
    thumbAssetVersion: string;
    rotate: number;
    constructor(data?: KalturaThumbParamsOutputArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

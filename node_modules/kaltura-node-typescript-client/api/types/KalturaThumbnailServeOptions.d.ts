import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaAssetServeOptions, KalturaAssetServeOptionsArgs } from './KalturaAssetServeOptions';
export interface KalturaThumbnailServeOptionsArgs extends KalturaAssetServeOptionsArgs {
}
export declare class KalturaThumbnailServeOptions extends KalturaAssetServeOptions {
    constructor(data?: KalturaThumbnailServeOptionsArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

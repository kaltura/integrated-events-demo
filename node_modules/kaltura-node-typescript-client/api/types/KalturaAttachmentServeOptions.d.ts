import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaAssetServeOptions, KalturaAssetServeOptionsArgs } from './KalturaAssetServeOptions';
export interface KalturaAttachmentServeOptionsArgs extends KalturaAssetServeOptionsArgs {
}
export declare class KalturaAttachmentServeOptions extends KalturaAssetServeOptions {
    constructor(data?: KalturaAttachmentServeOptionsArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

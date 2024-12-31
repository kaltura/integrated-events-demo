import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaUploadErrorCode } from './KalturaUploadErrorCode';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';
export interface KalturaUploadResponseArgs extends KalturaObjectBaseArgs {
    uploadTokenId?: string;
    fileSize?: number;
    errorCode?: KalturaUploadErrorCode;
    errorDescription?: string;
}
export declare class KalturaUploadResponse extends KalturaObjectBase {
    uploadTokenId: string;
    fileSize: number;
    errorCode: KalturaUploadErrorCode;
    errorDescription: string;
    constructor(data?: KalturaUploadResponseArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

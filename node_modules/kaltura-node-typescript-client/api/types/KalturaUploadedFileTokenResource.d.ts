import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaGenericDataCenterContentResource, KalturaGenericDataCenterContentResourceArgs } from './KalturaGenericDataCenterContentResource';
export interface KalturaUploadedFileTokenResourceArgs extends KalturaGenericDataCenterContentResourceArgs {
    token?: string;
}
export declare class KalturaUploadedFileTokenResource extends KalturaGenericDataCenterContentResource {
    token: string;
    constructor(data?: KalturaUploadedFileTokenResourceArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

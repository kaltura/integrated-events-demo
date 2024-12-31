import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaGenericDataCenterContentResource, KalturaGenericDataCenterContentResourceArgs } from './KalturaGenericDataCenterContentResource';
export interface KalturaDropFolderFileResourceArgs extends KalturaGenericDataCenterContentResourceArgs {
    dropFolderFileId?: number;
}
export declare class KalturaDropFolderFileResource extends KalturaGenericDataCenterContentResource {
    dropFolderFileId: number;
    constructor(data?: KalturaDropFolderFileResourceArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

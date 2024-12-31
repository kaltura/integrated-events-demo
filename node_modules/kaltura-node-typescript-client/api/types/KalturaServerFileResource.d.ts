import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaGenericDataCenterContentResource, KalturaGenericDataCenterContentResourceArgs } from './KalturaGenericDataCenterContentResource';
export interface KalturaServerFileResourceArgs extends KalturaGenericDataCenterContentResourceArgs {
    localFilePath?: string;
    keepOriginalFile?: boolean;
}
export declare class KalturaServerFileResource extends KalturaGenericDataCenterContentResource {
    localFilePath: string;
    keepOriginalFile: boolean;
    constructor(data?: KalturaServerFileResourceArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaBulkUploadObjectData, KalturaBulkUploadObjectDataArgs } from './KalturaBulkUploadObjectData';
export interface KalturaBulkUploadCategoryUserDataArgs extends KalturaBulkUploadObjectDataArgs {
}
export declare class KalturaBulkUploadCategoryUserData extends KalturaBulkUploadObjectData {
    constructor(data?: KalturaBulkUploadCategoryUserDataArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

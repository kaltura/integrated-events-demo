import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaBulkUploadObjectData, KalturaBulkUploadObjectDataArgs } from './KalturaBulkUploadObjectData';
export interface KalturaBulkUploadCategoryDataArgs extends KalturaBulkUploadObjectDataArgs {
}
export declare class KalturaBulkUploadCategoryData extends KalturaBulkUploadObjectData {
    constructor(data?: KalturaBulkUploadCategoryDataArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

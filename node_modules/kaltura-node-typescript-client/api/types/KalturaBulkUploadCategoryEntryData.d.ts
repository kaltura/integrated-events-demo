import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaBulkUploadObjectData, KalturaBulkUploadObjectDataArgs } from './KalturaBulkUploadObjectData';
export interface KalturaBulkUploadCategoryEntryDataArgs extends KalturaBulkUploadObjectDataArgs {
}
export declare class KalturaBulkUploadCategoryEntryData extends KalturaBulkUploadObjectData {
    constructor(data?: KalturaBulkUploadCategoryEntryDataArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

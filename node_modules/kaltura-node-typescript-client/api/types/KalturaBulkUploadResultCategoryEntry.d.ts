import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaBulkUploadResult, KalturaBulkUploadResultArgs } from './KalturaBulkUploadResult';
export interface KalturaBulkUploadResultCategoryEntryArgs extends KalturaBulkUploadResultArgs {
    categoryId?: number;
    entryId?: string;
}
export declare class KalturaBulkUploadResultCategoryEntry extends KalturaBulkUploadResult {
    categoryId: number;
    entryId: string;
    constructor(data?: KalturaBulkUploadResultCategoryEntryArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

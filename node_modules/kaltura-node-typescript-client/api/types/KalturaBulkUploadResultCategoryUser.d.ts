import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaBulkUploadResult, KalturaBulkUploadResultArgs } from './KalturaBulkUploadResult';
export interface KalturaBulkUploadResultCategoryUserArgs extends KalturaBulkUploadResultArgs {
    categoryId?: number;
    categoryReferenceId?: string;
    userId?: string;
    permissionLevel?: number;
    updateMethod?: number;
    requiredObjectStatus?: number;
}
export declare class KalturaBulkUploadResultCategoryUser extends KalturaBulkUploadResult {
    categoryId: number;
    categoryReferenceId: string;
    userId: string;
    permissionLevel: number;
    updateMethod: number;
    requiredObjectStatus: number;
    constructor(data?: KalturaBulkUploadResultCategoryUserArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

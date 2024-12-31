import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaBatchJobStatus } from './KalturaBatchJobStatus';
import { KalturaBulkUploadType } from './KalturaBulkUploadType';
import { KalturaBulkUploadResult } from './KalturaBulkUploadResult';
import { KalturaBatchJobErrorTypes } from './KalturaBatchJobErrorTypes';
import { KalturaBulkUploadObjectType } from './KalturaBulkUploadObjectType';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';
export interface KalturaBulkUploadArgs extends KalturaObjectBaseArgs {
    id?: number;
    uploadedBy?: string;
    uploadedByUserId?: string;
    uploadedOn?: Date;
    numOfEntries?: number;
    status?: KalturaBatchJobStatus;
    logFileUrl?: string;
    csvFileUrl?: string;
    bulkFileUrl?: string;
    bulkUploadType?: KalturaBulkUploadType;
    results?: KalturaBulkUploadResult[];
    error?: string;
    errorType?: KalturaBatchJobErrorTypes;
    errorNumber?: number;
    fileName?: string;
    description?: string;
    numOfObjects?: number;
    bulkUploadObjectType?: KalturaBulkUploadObjectType;
}
export declare class KalturaBulkUpload extends KalturaObjectBase {
    id: number;
    uploadedBy: string;
    uploadedByUserId: string;
    uploadedOn: Date;
    numOfEntries: number;
    status: KalturaBatchJobStatus;
    logFileUrl: string;
    csvFileUrl: string;
    bulkFileUrl: string;
    bulkUploadType: KalturaBulkUploadType;
    results: KalturaBulkUploadResult[];
    error: string;
    errorType: KalturaBatchJobErrorTypes;
    errorNumber: number;
    fileName: string;
    description: string;
    numOfObjects: number;
    bulkUploadObjectType: KalturaBulkUploadObjectType;
    constructor(data?: KalturaBulkUploadArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

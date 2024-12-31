import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaBatchJobStatus } from './KalturaBatchJobStatus';
import { KalturaBulkUploadObjectType } from './KalturaBulkUploadObjectType';
import { KalturaFilter, KalturaFilterArgs } from './KalturaFilter';
export interface KalturaBulkUploadBaseFilterArgs extends KalturaFilterArgs {
    uploadedOnGreaterThanOrEqual?: Date;
    uploadedOnLessThanOrEqual?: Date;
    uploadedOnEqual?: Date;
    statusIn?: string;
    statusEqual?: KalturaBatchJobStatus;
    bulkUploadObjectTypeEqual?: KalturaBulkUploadObjectType;
    bulkUploadObjectTypeIn?: string;
}
export declare class KalturaBulkUploadBaseFilter extends KalturaFilter {
    uploadedOnGreaterThanOrEqual: Date;
    uploadedOnLessThanOrEqual: Date;
    uploadedOnEqual: Date;
    statusIn: string;
    statusEqual: KalturaBatchJobStatus;
    bulkUploadObjectTypeEqual: KalturaBulkUploadObjectType;
    bulkUploadObjectTypeIn: string;
    constructor(data?: KalturaBulkUploadBaseFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

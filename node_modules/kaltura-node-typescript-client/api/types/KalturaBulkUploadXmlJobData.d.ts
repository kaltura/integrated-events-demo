import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaBulkUploadJobData, KalturaBulkUploadJobDataArgs } from './KalturaBulkUploadJobData';
export interface KalturaBulkUploadXmlJobDataArgs extends KalturaBulkUploadJobDataArgs {
}
export declare class KalturaBulkUploadXmlJobData extends KalturaBulkUploadJobData {
    constructor(data?: KalturaBulkUploadXmlJobDataArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

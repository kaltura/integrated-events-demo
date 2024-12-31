import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaFilter } from './KalturaFilter';
import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaBulkUploadJobData, KalturaBulkUploadJobDataArgs } from './KalturaBulkUploadJobData';
export interface KalturaBulkUploadFilterJobDataArgs extends KalturaBulkUploadJobDataArgs {
    filter?: KalturaFilter;
    templateObject?: KalturaObjectBase;
}
export declare class KalturaBulkUploadFilterJobData extends KalturaBulkUploadJobData {
    filter: KalturaFilter;
    templateObject: KalturaObjectBase;
    constructor(data?: KalturaBulkUploadFilterJobDataArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

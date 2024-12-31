import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaBulkUploadObjectData, KalturaBulkUploadObjectDataArgs } from './KalturaBulkUploadObjectData';
export interface KalturaBulkUploadEntryDataArgs extends KalturaBulkUploadObjectDataArgs {
    conversionProfileId?: number;
}
export declare class KalturaBulkUploadEntryData extends KalturaBulkUploadObjectData {
    conversionProfileId: number;
    constructor(data?: KalturaBulkUploadEntryDataArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

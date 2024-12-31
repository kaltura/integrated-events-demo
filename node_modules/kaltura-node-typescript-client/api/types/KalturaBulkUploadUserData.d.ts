import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaBulkUploadObjectData, KalturaBulkUploadObjectDataArgs } from './KalturaBulkUploadObjectData';
export interface KalturaBulkUploadUserDataArgs extends KalturaBulkUploadObjectDataArgs {
}
export declare class KalturaBulkUploadUserData extends KalturaBulkUploadObjectData {
    constructor(data?: KalturaBulkUploadUserDataArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

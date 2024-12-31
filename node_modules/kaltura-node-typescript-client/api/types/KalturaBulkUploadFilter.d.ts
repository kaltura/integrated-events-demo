import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaBulkUploadBaseFilter, KalturaBulkUploadBaseFilterArgs } from './KalturaBulkUploadBaseFilter';
export interface KalturaBulkUploadFilterArgs extends KalturaBulkUploadBaseFilterArgs {
}
export declare class KalturaBulkUploadFilter extends KalturaBulkUploadBaseFilter {
    constructor(data?: KalturaBulkUploadFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaBulkUploadResult, KalturaBulkUploadResultArgs } from './KalturaBulkUploadResult';
export interface KalturaBulkUploadResultScheduleResourceArgs extends KalturaBulkUploadResultArgs {
    resourceId?: string;
    name?: string;
    type?: string;
    systemName?: string;
    description?: string;
    tags?: string;
    parentType?: string;
    parentSystemName?: string;
}
export declare class KalturaBulkUploadResultScheduleResource extends KalturaBulkUploadResult {
    resourceId: string;
    name: string;
    type: string;
    systemName: string;
    description: string;
    tags: string;
    parentType: string;
    parentSystemName: string;
    constructor(data?: KalturaBulkUploadResultScheduleResourceArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

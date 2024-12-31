import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaBulkUploadResultStatus } from './KalturaBulkUploadResultStatus';
import { KalturaBulkUploadAction } from './KalturaBulkUploadAction';
import { KalturaBulkUploadObjectType } from './KalturaBulkUploadObjectType';
import { KalturaBulkUploadPluginData } from './KalturaBulkUploadPluginData';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';
export interface KalturaBulkUploadResultArgs extends KalturaObjectBaseArgs {
    bulkUploadJobId?: number;
    lineIndex?: number;
    partnerId?: number;
    status?: KalturaBulkUploadResultStatus;
    action?: KalturaBulkUploadAction;
    objectId?: string;
    objectStatus?: number;
    bulkUploadResultObjectType?: KalturaBulkUploadObjectType;
    rowData?: string;
    partnerData?: string;
    objectErrorDescription?: string;
    pluginsData?: KalturaBulkUploadPluginData[];
    errorDescription?: string;
    errorCode?: string;
    errorType?: number;
}
export declare class KalturaBulkUploadResult extends KalturaObjectBase {
    readonly id: number;
    bulkUploadJobId: number;
    lineIndex: number;
    partnerId: number;
    status: KalturaBulkUploadResultStatus;
    action: KalturaBulkUploadAction;
    objectId: string;
    objectStatus: number;
    bulkUploadResultObjectType: KalturaBulkUploadObjectType;
    rowData: string;
    partnerData: string;
    objectErrorDescription: string;
    pluginsData: KalturaBulkUploadPluginData[];
    errorDescription: string;
    errorCode: string;
    errorType: number;
    constructor(data?: KalturaBulkUploadResultArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

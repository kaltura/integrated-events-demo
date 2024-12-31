import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaUploadTokenStatus } from './KalturaUploadTokenStatus';
import { KalturaFilter, KalturaFilterArgs } from './KalturaFilter';
export interface KalturaUploadTokenBaseFilterArgs extends KalturaFilterArgs {
    idEqual?: string;
    idIn?: string;
    userIdEqual?: string;
    statusEqual?: KalturaUploadTokenStatus;
    statusIn?: string;
    fileNameEqual?: string;
    fileSizeEqual?: number;
}
export declare class KalturaUploadTokenBaseFilter extends KalturaFilter {
    idEqual: string;
    idIn: string;
    userIdEqual: string;
    statusEqual: KalturaUploadTokenStatus;
    statusIn: string;
    fileNameEqual: string;
    fileSizeEqual: number;
    constructor(data?: KalturaUploadTokenBaseFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaJobData, KalturaJobDataArgs } from './KalturaJobData';
export interface KalturaBulkDownloadJobDataArgs extends KalturaJobDataArgs {
    entryIds?: string;
    flavorParamsId?: number;
    puserId?: string;
}
export declare class KalturaBulkDownloadJobData extends KalturaJobData {
    entryIds: string;
    flavorParamsId: number;
    puserId: string;
    constructor(data?: KalturaBulkDownloadJobDataArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

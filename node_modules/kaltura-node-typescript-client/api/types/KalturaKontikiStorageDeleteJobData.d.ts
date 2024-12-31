import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaStorageDeleteJobData, KalturaStorageDeleteJobDataArgs } from './KalturaStorageDeleteJobData';
export interface KalturaKontikiStorageDeleteJobDataArgs extends KalturaStorageDeleteJobDataArgs {
    contentMoid?: string;
    serviceToken?: string;
}
export declare class KalturaKontikiStorageDeleteJobData extends KalturaStorageDeleteJobData {
    contentMoid: string;
    serviceToken: string;
    constructor(data?: KalturaKontikiStorageDeleteJobDataArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

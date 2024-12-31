import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaStorageJobData, KalturaStorageJobDataArgs } from './KalturaStorageJobData';
export interface KalturaStorageDeleteJobDataArgs extends KalturaStorageJobDataArgs {
}
export declare class KalturaStorageDeleteJobData extends KalturaStorageJobData {
    constructor(data?: KalturaStorageDeleteJobDataArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

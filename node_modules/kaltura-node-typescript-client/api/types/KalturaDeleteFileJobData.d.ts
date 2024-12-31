import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaJobData, KalturaJobDataArgs } from './KalturaJobData';
export interface KalturaDeleteFileJobDataArgs extends KalturaJobDataArgs {
    localFileSyncPath?: string;
}
export declare class KalturaDeleteFileJobData extends KalturaJobData {
    localFileSyncPath: string;
    constructor(data?: KalturaDeleteFileJobDataArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

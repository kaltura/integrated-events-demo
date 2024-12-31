import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaJobData, KalturaJobDataArgs } from './KalturaJobData';
export interface KalturaConvertProfileJobDataArgs extends KalturaJobDataArgs {
    inputFileSyncLocalPath?: string;
    thumbHeight?: number;
    thumbBitrate?: number;
}
export declare class KalturaConvertProfileJobData extends KalturaJobData {
    inputFileSyncLocalPath: string;
    thumbHeight: number;
    thumbBitrate: number;
    constructor(data?: KalturaConvertProfileJobDataArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

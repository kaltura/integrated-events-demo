import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDryRunFileType } from './KalturaDryRunFileType';
import { KalturaJobData, KalturaJobDataArgs } from './KalturaJobData';
export interface KalturaScheduledTaskJobDataArgs extends KalturaJobDataArgs {
    maxResults?: number;
    totalCount?: number;
    fileFormat?: KalturaDryRunFileType;
    resultsFilePath?: string;
    referenceTime?: Date;
}
export declare class KalturaScheduledTaskJobData extends KalturaJobData {
    maxResults: number;
    totalCount: number;
    fileFormat: KalturaDryRunFileType;
    resultsFilePath: string;
    referenceTime: Date;
    constructor(data?: KalturaScheduledTaskJobDataArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

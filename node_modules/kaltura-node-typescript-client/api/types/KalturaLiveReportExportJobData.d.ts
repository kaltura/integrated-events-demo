import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaJobData, KalturaJobDataArgs } from './KalturaJobData';
export interface KalturaLiveReportExportJobDataArgs extends KalturaJobDataArgs {
    timeReference?: Date;
    timeZoneOffset?: number;
    entryIds?: string;
    outputPath?: string;
    recipientEmail?: string;
}
export declare class KalturaLiveReportExportJobData extends KalturaJobData {
    timeReference: Date;
    timeZoneOffset: number;
    entryIds: string;
    outputPath: string;
    recipientEmail: string;
    constructor(data?: KalturaLiveReportExportJobDataArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

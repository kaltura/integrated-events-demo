import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDistributionJobData, KalturaDistributionJobDataArgs } from './KalturaDistributionJobData';
export interface KalturaDistributionFetchReportJobDataArgs extends KalturaDistributionJobDataArgs {
    plays?: number;
    views?: number;
}
export declare class KalturaDistributionFetchReportJobData extends KalturaDistributionJobData {
    plays: number;
    views: number;
    constructor(data?: KalturaDistributionFetchReportJobDataArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

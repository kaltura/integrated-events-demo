import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDistributionJobData, KalturaDistributionJobDataArgs } from './KalturaDistributionJobData';
export interface KalturaDistributionSubmitJobDataArgs extends KalturaDistributionJobDataArgs {
}
export declare class KalturaDistributionSubmitJobData extends KalturaDistributionJobData {
    constructor(data?: KalturaDistributionSubmitJobDataArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

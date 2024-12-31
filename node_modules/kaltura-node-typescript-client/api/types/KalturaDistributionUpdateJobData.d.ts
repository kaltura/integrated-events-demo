import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDistributionJobData, KalturaDistributionJobDataArgs } from './KalturaDistributionJobData';
export interface KalturaDistributionUpdateJobDataArgs extends KalturaDistributionJobDataArgs {
}
export declare class KalturaDistributionUpdateJobData extends KalturaDistributionJobData {
    constructor(data?: KalturaDistributionUpdateJobDataArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

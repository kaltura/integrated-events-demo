import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDistributionJobData, KalturaDistributionJobDataArgs } from './KalturaDistributionJobData';
export interface KalturaDistributionDeleteJobDataArgs extends KalturaDistributionJobDataArgs {
    keepDistributionItem?: boolean;
}
export declare class KalturaDistributionDeleteJobData extends KalturaDistributionJobData {
    keepDistributionItem: boolean;
    constructor(data?: KalturaDistributionDeleteJobDataArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

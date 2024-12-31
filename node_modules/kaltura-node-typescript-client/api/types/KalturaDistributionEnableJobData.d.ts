import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDistributionUpdateJobData, KalturaDistributionUpdateJobDataArgs } from './KalturaDistributionUpdateJobData';
export interface KalturaDistributionEnableJobDataArgs extends KalturaDistributionUpdateJobDataArgs {
}
export declare class KalturaDistributionEnableJobData extends KalturaDistributionUpdateJobData {
    constructor(data?: KalturaDistributionEnableJobDataArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

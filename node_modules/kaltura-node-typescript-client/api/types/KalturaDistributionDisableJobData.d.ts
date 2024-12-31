import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDistributionUpdateJobData, KalturaDistributionUpdateJobDataArgs } from './KalturaDistributionUpdateJobData';
export interface KalturaDistributionDisableJobDataArgs extends KalturaDistributionUpdateJobDataArgs {
}
export declare class KalturaDistributionDisableJobData extends KalturaDistributionUpdateJobData {
    constructor(data?: KalturaDistributionDisableJobDataArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

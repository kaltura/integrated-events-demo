import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaJobData, KalturaJobDataArgs } from './KalturaJobData';
export interface KalturaRecalculateCacheJobDataArgs extends KalturaJobDataArgs {
}
export declare class KalturaRecalculateCacheJobData extends KalturaJobData {
    constructor(data?: KalturaRecalculateCacheJobDataArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

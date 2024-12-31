import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaFilter } from './KalturaFilter';
import { KalturaJobData, KalturaJobDataArgs } from './KalturaJobData';
export interface KalturaDeleteJobDataArgs extends KalturaJobDataArgs {
    filter?: KalturaFilter;
}
export declare class KalturaDeleteJobData extends KalturaJobData {
    filter: KalturaFilter;
    constructor(data?: KalturaDeleteJobDataArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaFilter } from './KalturaFilter';
import { KalturaJobData, KalturaJobDataArgs } from './KalturaJobData';
export interface KalturaIndexJobDataArgs extends KalturaJobDataArgs {
    filter?: KalturaFilter;
    lastIndexId?: number;
    lastIndexDepth?: number;
    shouldUpdate?: boolean;
}
export declare class KalturaIndexJobData extends KalturaJobData {
    filter: KalturaFilter;
    lastIndexId: number;
    lastIndexDepth: number;
    shouldUpdate: boolean;
    constructor(data?: KalturaIndexJobDataArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

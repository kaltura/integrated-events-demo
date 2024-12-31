import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaJobData, KalturaJobDataArgs } from './KalturaJobData';
export interface KalturaFlattenJobDataArgs extends KalturaJobDataArgs {
}
export declare class KalturaFlattenJobData extends KalturaJobData {
    constructor(data?: KalturaFlattenJobDataArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';
export interface KalturaJobDataArgs extends KalturaObjectBaseArgs {
}
export declare class KalturaJobData extends KalturaObjectBase {
    constructor(data?: KalturaJobDataArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

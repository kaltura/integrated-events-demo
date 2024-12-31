import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';
export interface KalturaESearchRangeArgs extends KalturaObjectBaseArgs {
    greaterThanOrEqual?: number;
    lessThanOrEqual?: number;
    greaterThan?: number;
    lessThan?: number;
}
export declare class KalturaESearchRange extends KalturaObjectBase {
    greaterThanOrEqual: number;
    lessThanOrEqual: number;
    greaterThan: number;
    lessThan: number;
    constructor(data?: KalturaESearchRangeArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';
export interface KalturaBaseRestrictionArgs extends KalturaObjectBaseArgs {
}
export declare class KalturaBaseRestriction extends KalturaObjectBase {
    constructor(data?: KalturaBaseRestrictionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

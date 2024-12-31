import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';
export interface KalturaBaseEntryCloneOptionItemArgs extends KalturaObjectBaseArgs {
}
export declare class KalturaBaseEntryCloneOptionItem extends KalturaObjectBase {
    constructor(data?: KalturaBaseEntryCloneOptionItemArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

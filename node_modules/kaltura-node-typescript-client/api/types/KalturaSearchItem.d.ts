import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';
export interface KalturaSearchItemArgs extends KalturaObjectBaseArgs {
}
export declare class KalturaSearchItem extends KalturaObjectBase {
    constructor(data?: KalturaSearchItemArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';
export interface KalturaESearchBaseItemArgs extends KalturaObjectBaseArgs {
}
export declare class KalturaESearchBaseItem extends KalturaObjectBase {
    constructor(data?: KalturaESearchBaseItemArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

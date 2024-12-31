import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaESearchSortOrder } from './KalturaESearchSortOrder';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';
export interface KalturaESearchOrderByItemArgs extends KalturaObjectBaseArgs {
    sortOrder?: KalturaESearchSortOrder;
}
export declare class KalturaESearchOrderByItem extends KalturaObjectBase {
    sortOrder: KalturaESearchSortOrder;
    constructor(data?: KalturaESearchOrderByItemArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

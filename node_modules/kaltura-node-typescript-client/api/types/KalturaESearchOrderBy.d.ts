import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaESearchOrderByItem } from './KalturaESearchOrderByItem';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';
export interface KalturaESearchOrderByArgs extends KalturaObjectBaseArgs {
    orderItems?: KalturaESearchOrderByItem[];
}
export declare class KalturaESearchOrderBy extends KalturaObjectBase {
    orderItems: KalturaESearchOrderByItem[];
    constructor(data?: KalturaESearchOrderByArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

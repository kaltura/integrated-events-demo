import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaESearchUserOrderByFieldName } from './KalturaESearchUserOrderByFieldName';
import { KalturaESearchOrderByItem, KalturaESearchOrderByItemArgs } from './KalturaESearchOrderByItem';
export interface KalturaESearchUserOrderByItemArgs extends KalturaESearchOrderByItemArgs {
    sortField?: KalturaESearchUserOrderByFieldName;
}
export declare class KalturaESearchUserOrderByItem extends KalturaESearchOrderByItem {
    sortField: KalturaESearchUserOrderByFieldName;
    constructor(data?: KalturaESearchUserOrderByItemArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

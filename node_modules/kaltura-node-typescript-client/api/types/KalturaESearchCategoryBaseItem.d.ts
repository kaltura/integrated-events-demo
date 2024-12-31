import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaESearchBaseItem, KalturaESearchBaseItemArgs } from './KalturaESearchBaseItem';
export interface KalturaESearchCategoryBaseItemArgs extends KalturaESearchBaseItemArgs {
}
export declare class KalturaESearchCategoryBaseItem extends KalturaESearchBaseItem {
    constructor(data?: KalturaESearchCategoryBaseItemArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

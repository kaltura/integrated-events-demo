import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaESearchBaseItem, KalturaESearchBaseItemArgs } from './KalturaESearchBaseItem';
export interface KalturaESearchUserBaseItemArgs extends KalturaESearchBaseItemArgs {
}
export declare class KalturaESearchUserBaseItem extends KalturaESearchBaseItem {
    constructor(data?: KalturaESearchUserBaseItemArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

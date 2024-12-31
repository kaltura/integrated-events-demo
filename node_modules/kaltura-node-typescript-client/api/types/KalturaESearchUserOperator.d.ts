import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaESearchOperatorType } from './KalturaESearchOperatorType';
import { KalturaESearchUserBaseItem, KalturaESearchUserBaseItemArgs } from './KalturaESearchUserBaseItem';
export interface KalturaESearchUserOperatorArgs extends KalturaESearchUserBaseItemArgs {
    operator?: KalturaESearchOperatorType;
    searchItems?: KalturaESearchUserBaseItem[];
}
export declare class KalturaESearchUserOperator extends KalturaESearchUserBaseItem {
    operator: KalturaESearchOperatorType;
    searchItems: KalturaESearchUserBaseItem[];
    constructor(data?: KalturaESearchUserOperatorArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

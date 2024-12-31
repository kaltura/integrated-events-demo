import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaSearchItem, KalturaSearchItemArgs } from './KalturaSearchItem';
export interface KalturaSearchConditionArgs extends KalturaSearchItemArgs {
    field?: string;
    value?: string;
}
export declare class KalturaSearchCondition extends KalturaSearchItem {
    field: string;
    value: string;
    constructor(data?: KalturaSearchConditionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

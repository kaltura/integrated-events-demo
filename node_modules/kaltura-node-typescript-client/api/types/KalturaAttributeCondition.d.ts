import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaSearchItem, KalturaSearchItemArgs } from './KalturaSearchItem';
export interface KalturaAttributeConditionArgs extends KalturaSearchItemArgs {
    value?: string;
}
export declare class KalturaAttributeCondition extends KalturaSearchItem {
    value: string;
    constructor(data?: KalturaAttributeConditionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

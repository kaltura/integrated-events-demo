import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaSearchOperatorType } from './KalturaSearchOperatorType';
import { KalturaSearchItem, KalturaSearchItemArgs } from './KalturaSearchItem';
export interface KalturaSearchOperatorArgs extends KalturaSearchItemArgs {
    type?: KalturaSearchOperatorType;
    items?: KalturaSearchItem[];
}
export declare class KalturaSearchOperator extends KalturaSearchItem {
    type: KalturaSearchOperatorType;
    items: KalturaSearchItem[];
    constructor(data?: KalturaSearchOperatorArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

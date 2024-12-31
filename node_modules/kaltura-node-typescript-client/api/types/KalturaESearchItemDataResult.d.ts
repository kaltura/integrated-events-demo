import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaESearchItemData } from './KalturaESearchItemData';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';
export interface KalturaESearchItemDataResultArgs extends KalturaObjectBaseArgs {
    totalCount?: number;
    items?: KalturaESearchItemData[];
    itemsType?: string;
}
export declare class KalturaESearchItemDataResult extends KalturaObjectBase {
    totalCount: number;
    items: KalturaESearchItemData[];
    itemsType: string;
    constructor(data?: KalturaESearchItemDataResultArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

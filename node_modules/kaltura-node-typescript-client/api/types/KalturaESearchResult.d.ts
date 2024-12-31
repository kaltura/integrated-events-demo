import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaESearchHighlight } from './KalturaESearchHighlight';
import { KalturaESearchItemDataResult } from './KalturaESearchItemDataResult';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';
export interface KalturaESearchResultArgs extends KalturaObjectBaseArgs {
    highlight?: KalturaESearchHighlight[];
    itemsData?: KalturaESearchItemDataResult[];
}
export declare class KalturaESearchResult extends KalturaObjectBase {
    highlight: KalturaESearchHighlight[];
    itemsData: KalturaESearchItemDataResult[];
    constructor(data?: KalturaESearchResultArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

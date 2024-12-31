import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaESearchHighlight } from './KalturaESearchHighlight';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';
export interface KalturaESearchItemDataArgs extends KalturaObjectBaseArgs {
    highlight?: KalturaESearchHighlight[];
}
export declare class KalturaESearchItemData extends KalturaObjectBase {
    highlight: KalturaESearchHighlight[];
    constructor(data?: KalturaESearchItemDataArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

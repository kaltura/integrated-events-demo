import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaString } from './KalturaString';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';
export interface KalturaESearchHighlightArgs extends KalturaObjectBaseArgs {
    fieldName?: string;
    hits?: KalturaString[];
}
export declare class KalturaESearchHighlight extends KalturaObjectBase {
    fieldName: string;
    hits: KalturaString[];
    constructor(data?: KalturaESearchHighlightArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

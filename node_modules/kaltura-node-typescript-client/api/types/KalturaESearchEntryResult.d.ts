import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaBaseEntry } from './KalturaBaseEntry';
import { KalturaESearchResult, KalturaESearchResultArgs } from './KalturaESearchResult';
export interface KalturaESearchEntryResultArgs extends KalturaESearchResultArgs {
    object?: KalturaBaseEntry;
}
export declare class KalturaESearchEntryResult extends KalturaESearchResult {
    object: KalturaBaseEntry;
    constructor(data?: KalturaESearchEntryResultArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

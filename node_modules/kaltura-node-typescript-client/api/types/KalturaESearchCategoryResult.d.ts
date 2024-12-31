import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaCategory } from './KalturaCategory';
import { KalturaESearchResult, KalturaESearchResultArgs } from './KalturaESearchResult';
export interface KalturaESearchCategoryResultArgs extends KalturaESearchResultArgs {
    object?: KalturaCategory;
}
export declare class KalturaESearchCategoryResult extends KalturaESearchResult {
    object: KalturaCategory;
    constructor(data?: KalturaESearchCategoryResultArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

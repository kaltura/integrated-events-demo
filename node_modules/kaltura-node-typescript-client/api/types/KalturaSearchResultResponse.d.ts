import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaSearchResult } from './KalturaSearchResult';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';
export interface KalturaSearchResultResponseArgs extends KalturaObjectBaseArgs {
}
export declare class KalturaSearchResultResponse extends KalturaObjectBase {
    readonly objects: KalturaSearchResult[];
    readonly needMediaInfo: boolean;
    constructor(data?: KalturaSearchResultResponseArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

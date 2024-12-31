import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaUser } from './KalturaUser';
import { KalturaESearchResult, KalturaESearchResultArgs } from './KalturaESearchResult';
export interface KalturaESearchUserResultArgs extends KalturaESearchResultArgs {
    object?: KalturaUser;
}
export declare class KalturaESearchUserResult extends KalturaESearchResult {
    object: KalturaUser;
    constructor(data?: KalturaESearchUserResultArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

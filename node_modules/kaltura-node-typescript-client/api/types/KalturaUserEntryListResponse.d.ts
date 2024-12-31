import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaUserEntry } from './KalturaUserEntry';
import { KalturaListResponse, KalturaListResponseArgs } from './KalturaListResponse';
export interface KalturaUserEntryListResponseArgs extends KalturaListResponseArgs {
}
export declare class KalturaUserEntryListResponse extends KalturaListResponse {
    readonly objects: KalturaUserEntry[];
    constructor(data?: KalturaUserEntryListResponseArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

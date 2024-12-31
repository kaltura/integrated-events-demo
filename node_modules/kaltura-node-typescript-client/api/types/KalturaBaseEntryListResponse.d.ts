import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaBaseEntry } from './KalturaBaseEntry';
import { KalturaListResponse, KalturaListResponseArgs } from './KalturaListResponse';
export interface KalturaBaseEntryListResponseArgs extends KalturaListResponseArgs {
}
export declare class KalturaBaseEntryListResponse extends KalturaListResponse {
    readonly objects: KalturaBaseEntry[];
    constructor(data?: KalturaBaseEntryListResponseArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

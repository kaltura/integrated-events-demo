import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaExternalMediaEntry } from './KalturaExternalMediaEntry';
import { KalturaListResponse, KalturaListResponseArgs } from './KalturaListResponse';
export interface KalturaExternalMediaEntryListResponseArgs extends KalturaListResponseArgs {
}
export declare class KalturaExternalMediaEntryListResponse extends KalturaListResponse {
    readonly objects: KalturaExternalMediaEntry[];
    constructor(data?: KalturaExternalMediaEntryListResponseArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

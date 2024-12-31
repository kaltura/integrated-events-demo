import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaCategoryEntry } from './KalturaCategoryEntry';
import { KalturaListResponse, KalturaListResponseArgs } from './KalturaListResponse';
export interface KalturaCategoryEntryListResponseArgs extends KalturaListResponseArgs {
}
export declare class KalturaCategoryEntryListResponse extends KalturaListResponse {
    readonly objects: KalturaCategoryEntry[];
    constructor(data?: KalturaCategoryEntryListResponseArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

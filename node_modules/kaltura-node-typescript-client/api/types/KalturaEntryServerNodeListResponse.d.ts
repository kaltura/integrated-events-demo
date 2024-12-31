import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaEntryServerNode } from './KalturaEntryServerNode';
import { KalturaListResponse, KalturaListResponseArgs } from './KalturaListResponse';
export interface KalturaEntryServerNodeListResponseArgs extends KalturaListResponseArgs {
}
export declare class KalturaEntryServerNodeListResponse extends KalturaListResponse {
    readonly objects: KalturaEntryServerNode[];
    constructor(data?: KalturaEntryServerNodeListResponseArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

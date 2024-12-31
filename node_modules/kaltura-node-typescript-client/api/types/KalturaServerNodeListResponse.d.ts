import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaServerNode } from './KalturaServerNode';
import { KalturaListResponse, KalturaListResponseArgs } from './KalturaListResponse';
export interface KalturaServerNodeListResponseArgs extends KalturaListResponseArgs {
}
export declare class KalturaServerNodeListResponse extends KalturaListResponse {
    readonly objects: KalturaServerNode[];
    constructor(data?: KalturaServerNodeListResponseArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

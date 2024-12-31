import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaObject } from './KalturaObject';
import { KalturaListResponse, KalturaListResponseArgs } from './KalturaListResponse';
export interface KalturaObjectListResponseArgs extends KalturaListResponseArgs {
}
export declare class KalturaObjectListResponse extends KalturaListResponse {
    readonly objects: KalturaObject[];
    constructor(data?: KalturaObjectListResponseArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

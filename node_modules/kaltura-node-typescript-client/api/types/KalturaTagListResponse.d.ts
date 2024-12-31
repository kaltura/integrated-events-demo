import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTag } from './KalturaTag';
import { KalturaListResponse, KalturaListResponseArgs } from './KalturaListResponse';
export interface KalturaTagListResponseArgs extends KalturaListResponseArgs {
}
export declare class KalturaTagListResponse extends KalturaListResponse {
    readonly objects: KalturaTag[];
    constructor(data?: KalturaTagListResponseArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaAppToken } from './KalturaAppToken';
import { KalturaListResponse, KalturaListResponseArgs } from './KalturaListResponse';
export interface KalturaAppTokenListResponseArgs extends KalturaListResponseArgs {
}
export declare class KalturaAppTokenListResponse extends KalturaListResponse {
    readonly objects: KalturaAppToken[];
    constructor(data?: KalturaAppTokenListResponseArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

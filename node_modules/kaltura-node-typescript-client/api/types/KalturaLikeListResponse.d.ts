import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaLike } from './KalturaLike';
import { KalturaListResponse, KalturaListResponseArgs } from './KalturaListResponse';
export interface KalturaLikeListResponseArgs extends KalturaListResponseArgs {
}
export declare class KalturaLikeListResponse extends KalturaListResponse {
    readonly objects: KalturaLike[];
    constructor(data?: KalturaLikeListResponseArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaCategoryUser } from './KalturaCategoryUser';
import { KalturaListResponse, KalturaListResponseArgs } from './KalturaListResponse';
export interface KalturaCategoryUserListResponseArgs extends KalturaListResponseArgs {
}
export declare class KalturaCategoryUserListResponse extends KalturaListResponse {
    readonly objects: KalturaCategoryUser[];
    constructor(data?: KalturaCategoryUserListResponseArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

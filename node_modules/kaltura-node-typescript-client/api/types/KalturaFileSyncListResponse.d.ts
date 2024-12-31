import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaFileSync } from './KalturaFileSync';
import { KalturaListResponse, KalturaListResponseArgs } from './KalturaListResponse';
export interface KalturaFileSyncListResponseArgs extends KalturaListResponseArgs {
}
export declare class KalturaFileSyncListResponse extends KalturaListResponse {
    readonly objects: KalturaFileSync[];
    constructor(data?: KalturaFileSyncListResponseArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

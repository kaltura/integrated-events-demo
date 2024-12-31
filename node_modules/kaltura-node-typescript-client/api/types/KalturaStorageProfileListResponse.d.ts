import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaStorageProfile } from './KalturaStorageProfile';
import { KalturaListResponse, KalturaListResponseArgs } from './KalturaListResponse';
export interface KalturaStorageProfileListResponseArgs extends KalturaListResponseArgs {
}
export declare class KalturaStorageProfileListResponse extends KalturaListResponse {
    readonly objects: KalturaStorageProfile[];
    constructor(data?: KalturaStorageProfileListResponseArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

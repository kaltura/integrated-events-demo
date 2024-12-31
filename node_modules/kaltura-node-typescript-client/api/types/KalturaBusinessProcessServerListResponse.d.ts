import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaBusinessProcessServer } from './KalturaBusinessProcessServer';
import { KalturaListResponse, KalturaListResponseArgs } from './KalturaListResponse';
export interface KalturaBusinessProcessServerListResponseArgs extends KalturaListResponseArgs {
}
export declare class KalturaBusinessProcessServerListResponse extends KalturaListResponse {
    readonly objects: KalturaBusinessProcessServer[];
    constructor(data?: KalturaBusinessProcessServerListResponseArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

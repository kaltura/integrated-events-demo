import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaMediaEntry } from './KalturaMediaEntry';
import { KalturaListResponse, KalturaListResponseArgs } from './KalturaListResponse';
export interface KalturaMediaListResponseArgs extends KalturaListResponseArgs {
}
export declare class KalturaMediaListResponse extends KalturaListResponse {
    readonly objects: KalturaMediaEntry[];
    constructor(data?: KalturaMediaListResponseArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

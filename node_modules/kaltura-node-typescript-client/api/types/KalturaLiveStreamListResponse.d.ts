import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaLiveStreamEntry } from './KalturaLiveStreamEntry';
import { KalturaListResponse, KalturaListResponseArgs } from './KalturaListResponse';
export interface KalturaLiveStreamListResponseArgs extends KalturaListResponseArgs {
}
export declare class KalturaLiveStreamListResponse extends KalturaListResponse {
    readonly objects: KalturaLiveStreamEntry[];
    constructor(data?: KalturaLiveStreamListResponseArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

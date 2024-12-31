import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaLiveChannelSegment } from './KalturaLiveChannelSegment';
import { KalturaListResponse, KalturaListResponseArgs } from './KalturaListResponse';
export interface KalturaLiveChannelSegmentListResponseArgs extends KalturaListResponseArgs {
}
export declare class KalturaLiveChannelSegmentListResponse extends KalturaListResponse {
    readonly objects: KalturaLiveChannelSegment[];
    constructor(data?: KalturaLiveChannelSegmentListResponseArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

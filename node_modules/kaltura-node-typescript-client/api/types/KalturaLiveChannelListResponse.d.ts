import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaLiveChannel } from './KalturaLiveChannel';
import { KalturaListResponse, KalturaListResponseArgs } from './KalturaListResponse';
export interface KalturaLiveChannelListResponseArgs extends KalturaListResponseArgs {
}
export declare class KalturaLiveChannelListResponse extends KalturaListResponse {
    readonly objects: KalturaLiveChannel[];
    constructor(data?: KalturaLiveChannelListResponseArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaBaseSyndicationFeed } from './KalturaBaseSyndicationFeed';
import { KalturaListResponse, KalturaListResponseArgs } from './KalturaListResponse';
export interface KalturaBaseSyndicationFeedListResponseArgs extends KalturaListResponseArgs {
}
export declare class KalturaBaseSyndicationFeedListResponse extends KalturaListResponse {
    readonly objects: KalturaBaseSyndicationFeed[];
    constructor(data?: KalturaBaseSyndicationFeedListResponseArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaLiveStats } from './KalturaLiveStats';
import { KalturaListResponse, KalturaListResponseArgs } from './KalturaListResponse';
export interface KalturaLiveStatsListResponseArgs extends KalturaListResponseArgs {
    objects?: KalturaLiveStats;
}
export declare class KalturaLiveStatsListResponse extends KalturaListResponse {
    objects: KalturaLiveStats;
    constructor(data?: KalturaLiveStatsListResponseArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

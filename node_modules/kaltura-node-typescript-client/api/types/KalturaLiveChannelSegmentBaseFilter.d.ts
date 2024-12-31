import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaLiveChannelSegmentStatus } from './KalturaLiveChannelSegmentStatus';
import { KalturaRelatedFilter, KalturaRelatedFilterArgs } from './KalturaRelatedFilter';
export interface KalturaLiveChannelSegmentBaseFilterArgs extends KalturaRelatedFilterArgs {
    createdAtGreaterThanOrEqual?: number;
    createdAtLessThanOrEqual?: number;
    updatedAtGreaterThanOrEqual?: number;
    updatedAtLessThanOrEqual?: number;
    statusEqual?: KalturaLiveChannelSegmentStatus;
    statusIn?: string;
    channelIdEqual?: string;
    channelIdIn?: string;
    startTimeGreaterThanOrEqual?: number;
    startTimeLessThanOrEqual?: number;
}
export declare class KalturaLiveChannelSegmentBaseFilter extends KalturaRelatedFilter {
    createdAtGreaterThanOrEqual: number;
    createdAtLessThanOrEqual: number;
    updatedAtGreaterThanOrEqual: number;
    updatedAtLessThanOrEqual: number;
    statusEqual: KalturaLiveChannelSegmentStatus;
    statusIn: string;
    channelIdEqual: string;
    channelIdIn: string;
    startTimeGreaterThanOrEqual: number;
    startTimeLessThanOrEqual: number;
    constructor(data?: KalturaLiveChannelSegmentBaseFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

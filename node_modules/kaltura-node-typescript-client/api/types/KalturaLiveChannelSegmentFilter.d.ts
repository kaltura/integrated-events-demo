import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaLiveChannelSegmentBaseFilter, KalturaLiveChannelSegmentBaseFilterArgs } from './KalturaLiveChannelSegmentBaseFilter';
export interface KalturaLiveChannelSegmentFilterArgs extends KalturaLiveChannelSegmentBaseFilterArgs {
}
export declare class KalturaLiveChannelSegmentFilter extends KalturaLiveChannelSegmentBaseFilter {
    constructor(data?: KalturaLiveChannelSegmentFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

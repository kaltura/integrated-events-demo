import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaLiveChannelBaseFilter, KalturaLiveChannelBaseFilterArgs } from './KalturaLiveChannelBaseFilter';
export interface KalturaLiveChannelFilterArgs extends KalturaLiveChannelBaseFilterArgs {
}
export declare class KalturaLiveChannelFilter extends KalturaLiveChannelBaseFilter {
    constructor(data?: KalturaLiveChannelFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaLiveEntryFilter, KalturaLiveEntryFilterArgs } from './KalturaLiveEntryFilter';
export interface KalturaLiveChannelBaseFilterArgs extends KalturaLiveEntryFilterArgs {
}
export declare class KalturaLiveChannelBaseFilter extends KalturaLiveEntryFilter {
    constructor(data?: KalturaLiveChannelBaseFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

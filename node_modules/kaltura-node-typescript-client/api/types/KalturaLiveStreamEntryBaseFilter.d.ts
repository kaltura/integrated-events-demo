import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaLiveEntryFilter, KalturaLiveEntryFilterArgs } from './KalturaLiveEntryFilter';
export interface KalturaLiveStreamEntryBaseFilterArgs extends KalturaLiveEntryFilterArgs {
}
export declare class KalturaLiveStreamEntryBaseFilter extends KalturaLiveEntryFilter {
    constructor(data?: KalturaLiveStreamEntryBaseFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

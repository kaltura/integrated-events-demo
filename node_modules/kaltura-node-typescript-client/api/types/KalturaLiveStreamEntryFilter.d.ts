import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaLiveStreamEntryBaseFilter, KalturaLiveStreamEntryBaseFilterArgs } from './KalturaLiveStreamEntryBaseFilter';
export interface KalturaLiveStreamEntryFilterArgs extends KalturaLiveStreamEntryBaseFilterArgs {
}
export declare class KalturaLiveStreamEntryFilter extends KalturaLiveStreamEntryBaseFilter {
    constructor(data?: KalturaLiveStreamEntryFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

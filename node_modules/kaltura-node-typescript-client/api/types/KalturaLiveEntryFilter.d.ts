import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaNullableBoolean } from './KalturaNullableBoolean';
import { KalturaLiveEntryBaseFilter, KalturaLiveEntryBaseFilterArgs } from './KalturaLiveEntryBaseFilter';
export interface KalturaLiveEntryFilterArgs extends KalturaLiveEntryBaseFilterArgs {
    isLive?: KalturaNullableBoolean;
    isRecordedEntryIdEmpty?: KalturaNullableBoolean;
    hasMediaServerHostname?: string;
}
export declare class KalturaLiveEntryFilter extends KalturaLiveEntryBaseFilter {
    isLive: KalturaNullableBoolean;
    isRecordedEntryIdEmpty: KalturaNullableBoolean;
    hasMediaServerHostname: string;
    constructor(data?: KalturaLiveEntryFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

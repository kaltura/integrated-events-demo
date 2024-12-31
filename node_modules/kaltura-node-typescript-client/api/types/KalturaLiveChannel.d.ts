import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaNullableBoolean } from './KalturaNullableBoolean';
import { KalturaLiveEntry, KalturaLiveEntryArgs } from './KalturaLiveEntry';
export interface KalturaLiveChannelArgs extends KalturaLiveEntryArgs {
    playlistId?: string;
    repeat?: KalturaNullableBoolean;
}
export declare class KalturaLiveChannel extends KalturaLiveEntry {
    playlistId: string;
    repeat: KalturaNullableBoolean;
    constructor(data?: KalturaLiveChannelArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

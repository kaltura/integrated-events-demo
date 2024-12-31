import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaEntryServerNodeRecordingStatus } from './KalturaEntryServerNodeRecordingStatus';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';
export interface KalturaLiveEntryServerNodeRecordingInfoArgs extends KalturaObjectBaseArgs {
    recordedEntryId?: string;
    duration?: number;
    recordingStatus?: KalturaEntryServerNodeRecordingStatus;
}
export declare class KalturaLiveEntryServerNodeRecordingInfo extends KalturaObjectBase {
    recordedEntryId: string;
    duration: number;
    recordingStatus: KalturaEntryServerNodeRecordingStatus;
    constructor(data?: KalturaLiveEntryServerNodeRecordingInfoArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaConferenceRoomStatus } from './KalturaConferenceRoomStatus';
import { KalturaEntryServerNode, KalturaEntryServerNodeArgs } from './KalturaEntryServerNode';
export interface KalturaConferenceEntryServerNodeArgs extends KalturaEntryServerNodeArgs {
}
export declare class KalturaConferenceEntryServerNode extends KalturaEntryServerNode {
    readonly confRoomStatus: KalturaConferenceRoomStatus;
    readonly registered: number;
    constructor(data?: KalturaConferenceEntryServerNodeArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaLiveStreamEntry, KalturaLiveStreamEntryArgs } from './KalturaLiveStreamEntry';
export interface KalturaLiveStreamAdminEntryArgs extends KalturaLiveStreamEntryArgs {
}
export declare class KalturaLiveStreamAdminEntry extends KalturaLiveStreamEntry {
    constructor(data?: KalturaLiveStreamAdminEntryArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

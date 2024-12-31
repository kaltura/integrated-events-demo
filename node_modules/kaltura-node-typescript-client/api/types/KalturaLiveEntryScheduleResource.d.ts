import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaScheduleResource, KalturaScheduleResourceArgs } from './KalturaScheduleResource';
export interface KalturaLiveEntryScheduleResourceArgs extends KalturaScheduleResourceArgs {
    entryId?: string;
}
export declare class KalturaLiveEntryScheduleResource extends KalturaScheduleResource {
    entryId: string;
    constructor(data?: KalturaLiveEntryScheduleResourceArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

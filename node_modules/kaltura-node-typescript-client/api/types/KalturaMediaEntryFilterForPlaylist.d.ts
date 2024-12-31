import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaMediaEntryFilter, KalturaMediaEntryFilterArgs } from './KalturaMediaEntryFilter';
export interface KalturaMediaEntryFilterForPlaylistArgs extends KalturaMediaEntryFilterArgs {
    limit?: number;
    name?: string;
}
export declare class KalturaMediaEntryFilterForPlaylist extends KalturaMediaEntryFilter {
    limit: number;
    name: string;
    constructor(data?: KalturaMediaEntryFilterForPlaylistArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaMediaEntryFilterForPlaylist } from './KalturaMediaEntryFilterForPlaylist';
import { KalturaPlaylistType } from './KalturaPlaylistType';
import { KalturaBaseEntry, KalturaBaseEntryArgs } from './KalturaBaseEntry';
export interface KalturaPlaylistArgs extends KalturaBaseEntryArgs {
    playlistContent?: string;
    filters?: KalturaMediaEntryFilterForPlaylist[];
    totalResults?: number;
    playlistType?: KalturaPlaylistType;
}
export declare class KalturaPlaylist extends KalturaBaseEntry {
    playlistContent: string;
    filters: KalturaMediaEntryFilterForPlaylist[];
    totalResults: number;
    playlistType: KalturaPlaylistType;
    readonly plays: number;
    readonly views: number;
    readonly duration: number;
    readonly executeUrl: string;
    constructor(data?: KalturaPlaylistArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

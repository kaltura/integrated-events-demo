import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaPlaylist } from './KalturaPlaylist';
import { KalturaListResponse, KalturaListResponseArgs } from './KalturaListResponse';
export interface KalturaPlaylistListResponseArgs extends KalturaListResponseArgs {
}
export declare class KalturaPlaylistListResponse extends KalturaListResponse {
    readonly objects: KalturaPlaylist[];
    constructor(data?: KalturaPlaylistListResponseArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

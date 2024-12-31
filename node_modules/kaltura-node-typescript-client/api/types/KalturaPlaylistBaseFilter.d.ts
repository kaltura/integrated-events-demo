import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaBaseEntryFilter, KalturaBaseEntryFilterArgs } from './KalturaBaseEntryFilter';
export interface KalturaPlaylistBaseFilterArgs extends KalturaBaseEntryFilterArgs {
}
export declare class KalturaPlaylistBaseFilter extends KalturaBaseEntryFilter {
    constructor(data?: KalturaPlaylistBaseFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

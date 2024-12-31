import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaMediaEntryFilter, KalturaMediaEntryFilterArgs } from './KalturaMediaEntryFilter';
export interface KalturaLiveEntryBaseFilterArgs extends KalturaMediaEntryFilterArgs {
}
export declare class KalturaLiveEntryBaseFilter extends KalturaMediaEntryFilter {
    constructor(data?: KalturaLiveEntryBaseFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

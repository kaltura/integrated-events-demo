import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaEntryServerNodeFilter, KalturaEntryServerNodeFilterArgs } from './KalturaEntryServerNodeFilter';
export interface KalturaLiveEntryServerNodeBaseFilterArgs extends KalturaEntryServerNodeFilterArgs {
}
export declare class KalturaLiveEntryServerNodeBaseFilter extends KalturaEntryServerNodeFilter {
    constructor(data?: KalturaLiveEntryServerNodeBaseFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

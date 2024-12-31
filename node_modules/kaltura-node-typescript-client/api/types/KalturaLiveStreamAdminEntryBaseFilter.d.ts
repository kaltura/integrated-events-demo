import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaLiveStreamEntryFilter, KalturaLiveStreamEntryFilterArgs } from './KalturaLiveStreamEntryFilter';
export interface KalturaLiveStreamAdminEntryBaseFilterArgs extends KalturaLiveStreamEntryFilterArgs {
}
export declare class KalturaLiveStreamAdminEntryBaseFilter extends KalturaLiveStreamEntryFilter {
    constructor(data?: KalturaLiveStreamAdminEntryBaseFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

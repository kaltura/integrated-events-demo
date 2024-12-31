import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaLiveStreamAdminEntryBaseFilter, KalturaLiveStreamAdminEntryBaseFilterArgs } from './KalturaLiveStreamAdminEntryBaseFilter';
export interface KalturaLiveStreamAdminEntryFilterArgs extends KalturaLiveStreamAdminEntryBaseFilterArgs {
}
export declare class KalturaLiveStreamAdminEntryFilter extends KalturaLiveStreamAdminEntryBaseFilter {
    constructor(data?: KalturaLiveStreamAdminEntryFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

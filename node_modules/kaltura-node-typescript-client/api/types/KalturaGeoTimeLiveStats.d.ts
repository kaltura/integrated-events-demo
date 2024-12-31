import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaCoordinate } from './KalturaCoordinate';
import { KalturaEntryLiveStats, KalturaEntryLiveStatsArgs } from './KalturaEntryLiveStats';
export interface KalturaGeoTimeLiveStatsArgs extends KalturaEntryLiveStatsArgs {
    city?: KalturaCoordinate;
    country?: KalturaCoordinate;
}
export declare class KalturaGeoTimeLiveStats extends KalturaEntryLiveStats {
    city: KalturaCoordinate;
    country: KalturaCoordinate;
    constructor(data?: KalturaGeoTimeLiveStatsArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

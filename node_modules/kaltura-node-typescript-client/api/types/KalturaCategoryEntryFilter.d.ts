import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaCategoryEntryBaseFilter, KalturaCategoryEntryBaseFilterArgs } from './KalturaCategoryEntryBaseFilter';
export interface KalturaCategoryEntryFilterArgs extends KalturaCategoryEntryBaseFilterArgs {
}
export declare class KalturaCategoryEntryFilter extends KalturaCategoryEntryBaseFilter {
    constructor(data?: KalturaCategoryEntryFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

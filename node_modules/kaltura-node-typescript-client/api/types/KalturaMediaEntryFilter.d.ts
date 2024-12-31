import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaMediaEntryBaseFilter, KalturaMediaEntryBaseFilterArgs } from './KalturaMediaEntryBaseFilter';
export interface KalturaMediaEntryFilterArgs extends KalturaMediaEntryBaseFilterArgs {
}
export declare class KalturaMediaEntryFilter extends KalturaMediaEntryBaseFilter {
    constructor(data?: KalturaMediaEntryFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

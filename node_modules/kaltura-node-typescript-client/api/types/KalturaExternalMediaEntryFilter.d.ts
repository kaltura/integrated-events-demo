import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaExternalMediaEntryBaseFilter, KalturaExternalMediaEntryBaseFilterArgs } from './KalturaExternalMediaEntryBaseFilter';
export interface KalturaExternalMediaEntryFilterArgs extends KalturaExternalMediaEntryBaseFilterArgs {
}
export declare class KalturaExternalMediaEntryFilter extends KalturaExternalMediaEntryBaseFilter {
    constructor(data?: KalturaExternalMediaEntryFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

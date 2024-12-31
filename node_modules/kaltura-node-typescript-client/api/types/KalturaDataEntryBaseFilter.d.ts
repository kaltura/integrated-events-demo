import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaBaseEntryFilter, KalturaBaseEntryFilterArgs } from './KalturaBaseEntryFilter';
export interface KalturaDataEntryBaseFilterArgs extends KalturaBaseEntryFilterArgs {
}
export declare class KalturaDataEntryBaseFilter extends KalturaBaseEntryFilter {
    constructor(data?: KalturaDataEntryBaseFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

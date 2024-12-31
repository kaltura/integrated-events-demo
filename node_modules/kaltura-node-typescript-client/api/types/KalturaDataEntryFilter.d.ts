import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDataEntryBaseFilter, KalturaDataEntryBaseFilterArgs } from './KalturaDataEntryBaseFilter';
export interface KalturaDataEntryFilterArgs extends KalturaDataEntryBaseFilterArgs {
}
export declare class KalturaDataEntryFilter extends KalturaDataEntryBaseFilter {
    constructor(data?: KalturaDataEntryFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

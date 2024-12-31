import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaMixEntryBaseFilter, KalturaMixEntryBaseFilterArgs } from './KalturaMixEntryBaseFilter';
export interface KalturaMixEntryFilterArgs extends KalturaMixEntryBaseFilterArgs {
}
export declare class KalturaMixEntryFilter extends KalturaMixEntryBaseFilter {
    constructor(data?: KalturaMixEntryFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

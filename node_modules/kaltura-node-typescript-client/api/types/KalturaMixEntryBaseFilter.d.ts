import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaPlayableEntryFilter, KalturaPlayableEntryFilterArgs } from './KalturaPlayableEntryFilter';
export interface KalturaMixEntryBaseFilterArgs extends KalturaPlayableEntryFilterArgs {
}
export declare class KalturaMixEntryBaseFilter extends KalturaPlayableEntryFilter {
    constructor(data?: KalturaMixEntryBaseFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

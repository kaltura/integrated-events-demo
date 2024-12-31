import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaPlayableEntryBaseFilter, KalturaPlayableEntryBaseFilterArgs } from './KalturaPlayableEntryBaseFilter';
export interface KalturaPlayableEntryFilterArgs extends KalturaPlayableEntryBaseFilterArgs {
}
export declare class KalturaPlayableEntryFilter extends KalturaPlayableEntryBaseFilter {
    constructor(data?: KalturaPlayableEntryFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

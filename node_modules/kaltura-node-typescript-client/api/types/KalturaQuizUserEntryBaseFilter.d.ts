import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaUserEntryFilter, KalturaUserEntryFilterArgs } from './KalturaUserEntryFilter';
export interface KalturaQuizUserEntryBaseFilterArgs extends KalturaUserEntryFilterArgs {
}
export declare class KalturaQuizUserEntryBaseFilter extends KalturaUserEntryFilter {
    constructor(data?: KalturaQuizUserEntryBaseFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

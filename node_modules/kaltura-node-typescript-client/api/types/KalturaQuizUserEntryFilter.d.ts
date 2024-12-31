import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaQuizUserEntryBaseFilter, KalturaQuizUserEntryBaseFilterArgs } from './KalturaQuizUserEntryBaseFilter';
export interface KalturaQuizUserEntryFilterArgs extends KalturaQuizUserEntryBaseFilterArgs {
}
export declare class KalturaQuizUserEntryFilter extends KalturaQuizUserEntryBaseFilter {
    constructor(data?: KalturaQuizUserEntryFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

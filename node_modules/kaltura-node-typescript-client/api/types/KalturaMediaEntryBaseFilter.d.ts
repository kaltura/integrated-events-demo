import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaMediaType } from './KalturaMediaType';
import { KalturaSourceType } from './KalturaSourceType';
import { KalturaPlayableEntryFilter, KalturaPlayableEntryFilterArgs } from './KalturaPlayableEntryFilter';
export interface KalturaMediaEntryBaseFilterArgs extends KalturaPlayableEntryFilterArgs {
    mediaTypeEqual?: KalturaMediaType;
    mediaTypeIn?: string;
    sourceTypeEqual?: KalturaSourceType;
    sourceTypeNotEqual?: KalturaSourceType;
    sourceTypeIn?: string;
    sourceTypeNotIn?: string;
    mediaDateGreaterThanOrEqual?: Date;
    mediaDateLessThanOrEqual?: Date;
    flavorParamsIdsMatchOr?: string;
    flavorParamsIdsMatchAnd?: string;
}
export declare class KalturaMediaEntryBaseFilter extends KalturaPlayableEntryFilter {
    mediaTypeEqual: KalturaMediaType;
    mediaTypeIn: string;
    sourceTypeEqual: KalturaSourceType;
    sourceTypeNotEqual: KalturaSourceType;
    sourceTypeIn: string;
    sourceTypeNotIn: string;
    mediaDateGreaterThanOrEqual: Date;
    mediaDateLessThanOrEqual: Date;
    flavorParamsIdsMatchOr: string;
    flavorParamsIdsMatchAnd: string;
    constructor(data?: KalturaMediaEntryBaseFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

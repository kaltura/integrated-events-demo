import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaScheduleEventFilter, KalturaScheduleEventFilterArgs } from './KalturaScheduleEventFilter';
export interface KalturaEntryScheduleEventBaseFilterArgs extends KalturaScheduleEventFilterArgs {
    templateEntryIdEqual?: string;
    entryIdsLike?: string;
    entryIdsMultiLikeOr?: string;
    entryIdsMultiLikeAnd?: string;
    categoryIdsLike?: string;
    categoryIdsMultiLikeOr?: string;
    categoryIdsMultiLikeAnd?: string;
}
export declare class KalturaEntryScheduleEventBaseFilter extends KalturaScheduleEventFilter {
    templateEntryIdEqual: string;
    entryIdsLike: string;
    entryIdsMultiLikeOr: string;
    entryIdsMultiLikeAnd: string;
    categoryIdsLike: string;
    categoryIdsMultiLikeOr: string;
    categoryIdsMultiLikeAnd: string;
    constructor(data?: KalturaEntryScheduleEventBaseFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

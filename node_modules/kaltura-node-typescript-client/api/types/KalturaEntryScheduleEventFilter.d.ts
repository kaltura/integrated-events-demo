import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaEntryScheduleEventBaseFilter, KalturaEntryScheduleEventBaseFilterArgs } from './KalturaEntryScheduleEventBaseFilter';
export interface KalturaEntryScheduleEventFilterArgs extends KalturaEntryScheduleEventBaseFilterArgs {
    parentCategoryIdsLike?: string;
    parentCategoryIdsMultiLikeOr?: string;
    parentCategoryIdsMultiLikeAnd?: string;
}
export declare class KalturaEntryScheduleEventFilter extends KalturaEntryScheduleEventBaseFilter {
    parentCategoryIdsLike: string;
    parentCategoryIdsMultiLikeOr: string;
    parentCategoryIdsMultiLikeAnd: string;
    constructor(data?: KalturaEntryScheduleEventFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

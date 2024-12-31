import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaScheduleEventBaseFilter, KalturaScheduleEventBaseFilterArgs } from './KalturaScheduleEventBaseFilter';
export interface KalturaScheduleEventFilterArgs extends KalturaScheduleEventBaseFilterArgs {
    resourceIdsLike?: string;
    resourceIdsMultiLikeOr?: string;
    resourceIdsMultiLikeAnd?: string;
    parentResourceIdsLike?: string;
    parentResourceIdsMultiLikeOr?: string;
    parentResourceIdsMultiLikeAnd?: string;
    templateEntryCategoriesIdsMultiLikeAnd?: string;
    templateEntryCategoriesIdsMultiLikeOr?: string;
    resourceSystemNamesMultiLikeOr?: string;
    templateEntryCategoriesIdsLike?: string;
    resourceSystemNamesMultiLikeAnd?: string;
    resourceSystemNamesLike?: string;
    resourceIdEqual?: string;
}
export declare class KalturaScheduleEventFilter extends KalturaScheduleEventBaseFilter {
    resourceIdsLike: string;
    resourceIdsMultiLikeOr: string;
    resourceIdsMultiLikeAnd: string;
    parentResourceIdsLike: string;
    parentResourceIdsMultiLikeOr: string;
    parentResourceIdsMultiLikeAnd: string;
    templateEntryCategoriesIdsMultiLikeAnd: string;
    templateEntryCategoriesIdsMultiLikeOr: string;
    resourceSystemNamesMultiLikeOr: string;
    templateEntryCategoriesIdsLike: string;
    resourceSystemNamesMultiLikeAnd: string;
    resourceSystemNamesLike: string;
    resourceIdEqual: string;
    constructor(data?: KalturaScheduleEventFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

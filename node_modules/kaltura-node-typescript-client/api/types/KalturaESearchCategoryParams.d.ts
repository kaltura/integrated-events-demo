import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaESearchCategoryOperator } from './KalturaESearchCategoryOperator';
import { KalturaESearchParams, KalturaESearchParamsArgs } from './KalturaESearchParams';
export interface KalturaESearchCategoryParamsArgs extends KalturaESearchParamsArgs {
    searchOperator?: KalturaESearchCategoryOperator;
}
export declare class KalturaESearchCategoryParams extends KalturaESearchParams {
    searchOperator: KalturaESearchCategoryOperator;
    constructor(data?: KalturaESearchCategoryParamsArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaESearchUserOperator } from './KalturaESearchUserOperator';
import { KalturaESearchParams, KalturaESearchParamsArgs } from './KalturaESearchParams';
export interface KalturaESearchUserParamsArgs extends KalturaESearchParamsArgs {
    searchOperator?: KalturaESearchUserOperator;
}
export declare class KalturaESearchUserParams extends KalturaESearchParams {
    searchOperator: KalturaESearchUserOperator;
    constructor(data?: KalturaESearchUserParamsArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

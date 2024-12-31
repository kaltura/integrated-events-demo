import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaRelatedFilter, KalturaRelatedFilterArgs } from './KalturaRelatedFilter';
export interface KalturaLikeBaseFilterArgs extends KalturaRelatedFilterArgs {
    entryIdEqual?: string;
    entryIdIn?: string;
    userIdEqual?: string;
    createdAtGreaterThanOrEqual?: Date;
    createdAtLessThanOrEqual?: Date;
}
export declare class KalturaLikeBaseFilter extends KalturaRelatedFilter {
    entryIdEqual: string;
    entryIdIn: string;
    userIdEqual: string;
    createdAtGreaterThanOrEqual: Date;
    createdAtLessThanOrEqual: Date;
    constructor(data?: KalturaLikeBaseFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

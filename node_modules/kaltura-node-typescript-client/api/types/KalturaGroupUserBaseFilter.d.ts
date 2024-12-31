import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaGroupUserStatus } from './KalturaGroupUserStatus';
import { KalturaRelatedFilter, KalturaRelatedFilterArgs } from './KalturaRelatedFilter';
export interface KalturaGroupUserBaseFilterArgs extends KalturaRelatedFilterArgs {
    userIdEqual?: string;
    userIdIn?: string;
    groupIdEqual?: string;
    groupIdIn?: string;
    statusEqual?: KalturaGroupUserStatus;
    statusIn?: string;
    createdAtGreaterThanOrEqual?: Date;
    createdAtLessThanOrEqual?: Date;
    updatedAtGreaterThanOrEqual?: Date;
    updatedAtLessThanOrEqual?: Date;
}
export declare class KalturaGroupUserBaseFilter extends KalturaRelatedFilter {
    userIdEqual: string;
    userIdIn: string;
    groupIdEqual: string;
    groupIdIn: string;
    statusEqual: KalturaGroupUserStatus;
    statusIn: string;
    createdAtGreaterThanOrEqual: Date;
    createdAtLessThanOrEqual: Date;
    updatedAtGreaterThanOrEqual: Date;
    updatedAtLessThanOrEqual: Date;
    constructor(data?: KalturaGroupUserBaseFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

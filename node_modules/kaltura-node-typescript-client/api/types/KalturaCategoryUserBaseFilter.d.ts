import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaCategoryUserPermissionLevel } from './KalturaCategoryUserPermissionLevel';
import { KalturaCategoryUserStatus } from './KalturaCategoryUserStatus';
import { KalturaUpdateMethodType } from './KalturaUpdateMethodType';
import { KalturaRelatedFilter, KalturaRelatedFilterArgs } from './KalturaRelatedFilter';
export interface KalturaCategoryUserBaseFilterArgs extends KalturaRelatedFilterArgs {
    categoryIdEqual?: number;
    categoryIdIn?: string;
    userIdEqual?: string;
    userIdIn?: string;
    permissionLevelEqual?: KalturaCategoryUserPermissionLevel;
    permissionLevelIn?: string;
    statusEqual?: KalturaCategoryUserStatus;
    statusIn?: string;
    createdAtGreaterThanOrEqual?: Date;
    createdAtLessThanOrEqual?: Date;
    updatedAtGreaterThanOrEqual?: Date;
    updatedAtLessThanOrEqual?: Date;
    updateMethodEqual?: KalturaUpdateMethodType;
    updateMethodIn?: string;
    categoryFullIdsStartsWith?: string;
    categoryFullIdsEqual?: string;
    permissionNamesMatchAnd?: string;
    permissionNamesMatchOr?: string;
    permissionNamesNotContains?: string;
}
export declare class KalturaCategoryUserBaseFilter extends KalturaRelatedFilter {
    categoryIdEqual: number;
    categoryIdIn: string;
    userIdEqual: string;
    userIdIn: string;
    permissionLevelEqual: KalturaCategoryUserPermissionLevel;
    permissionLevelIn: string;
    statusEqual: KalturaCategoryUserStatus;
    statusIn: string;
    createdAtGreaterThanOrEqual: Date;
    createdAtLessThanOrEqual: Date;
    updatedAtGreaterThanOrEqual: Date;
    updatedAtLessThanOrEqual: Date;
    updateMethodEqual: KalturaUpdateMethodType;
    updateMethodIn: string;
    categoryFullIdsStartsWith: string;
    categoryFullIdsEqual: string;
    permissionNamesMatchAnd: string;
    permissionNamesMatchOr: string;
    permissionNamesNotContains: string;
    constructor(data?: KalturaCategoryUserBaseFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

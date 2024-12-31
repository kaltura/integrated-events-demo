import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaESearchCategoryUserFieldName } from './KalturaESearchCategoryUserFieldName';
import { KalturaCategoryUserPermissionLevel } from './KalturaCategoryUserPermissionLevel';
import { KalturaESearchAbstractCategoryItem, KalturaESearchAbstractCategoryItemArgs } from './KalturaESearchAbstractCategoryItem';
export interface KalturaESearchCategoryUserItemArgs extends KalturaESearchAbstractCategoryItemArgs {
    fieldName?: KalturaESearchCategoryUserFieldName;
    permissionLevel?: KalturaCategoryUserPermissionLevel;
    permissionName?: string;
}
export declare class KalturaESearchCategoryUserItem extends KalturaESearchAbstractCategoryItem {
    fieldName: KalturaESearchCategoryUserFieldName;
    permissionLevel: KalturaCategoryUserPermissionLevel;
    permissionName: string;
    constructor(data?: KalturaESearchCategoryUserItemArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

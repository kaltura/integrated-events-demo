import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaCategoryUserPermissionLevel } from './KalturaCategoryUserPermissionLevel';
import { KalturaCategoryUserStatus } from './KalturaCategoryUserStatus';
import { KalturaUpdateMethodType } from './KalturaUpdateMethodType';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';
export interface KalturaCategoryUserArgs extends KalturaObjectBaseArgs {
    categoryId?: number;
    userId?: string;
    permissionLevel?: KalturaCategoryUserPermissionLevel;
    updateMethod?: KalturaUpdateMethodType;
    permissionNames?: string;
}
export declare class KalturaCategoryUser extends KalturaObjectBase {
    categoryId: number;
    userId: string;
    readonly partnerId: number;
    permissionLevel: KalturaCategoryUserPermissionLevel;
    readonly status: KalturaCategoryUserStatus;
    readonly createdAt: Date;
    readonly updatedAt: Date;
    updateMethod: KalturaUpdateMethodType;
    readonly categoryFullIds: string;
    permissionNames: string;
    constructor(data?: KalturaCategoryUserArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

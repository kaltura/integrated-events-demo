import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaPermissionType } from './KalturaPermissionType';
import { KalturaPermissionStatus } from './KalturaPermissionStatus';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';
export interface KalturaPermissionArgs extends KalturaObjectBaseArgs {
    name?: string;
    friendlyName?: string;
    description?: string;
    status?: KalturaPermissionStatus;
    dependsOnPermissionNames?: string;
    tags?: string;
    permissionItemsIds?: string;
    partnerGroup?: string;
}
export declare class KalturaPermission extends KalturaObjectBase {
    readonly id: number;
    readonly type: KalturaPermissionType;
    name: string;
    friendlyName: string;
    description: string;
    status: KalturaPermissionStatus;
    readonly partnerId: number;
    dependsOnPermissionNames: string;
    tags: string;
    permissionItemsIds: string;
    readonly createdAt: Date;
    readonly updatedAt: Date;
    partnerGroup: string;
    constructor(data?: KalturaPermissionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaUserRoleStatus } from './KalturaUserRoleStatus';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';
export interface KalturaUserRoleArgs extends KalturaObjectBaseArgs {
    name?: string;
    systemName?: string;
    description?: string;
    status?: KalturaUserRoleStatus;
    permissionNames?: string;
    tags?: string;
}
export declare class KalturaUserRole extends KalturaObjectBase {
    readonly id: number;
    name: string;
    systemName: string;
    description: string;
    status: KalturaUserRoleStatus;
    readonly partnerId: number;
    permissionNames: string;
    tags: string;
    readonly createdAt: Date;
    readonly updatedAt: Date;
    constructor(data?: KalturaUserRoleArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

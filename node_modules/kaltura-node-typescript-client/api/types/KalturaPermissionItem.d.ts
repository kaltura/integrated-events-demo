import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaPermissionItemType } from './KalturaPermissionItemType';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';
export interface KalturaPermissionItemArgs extends KalturaObjectBaseArgs {
    tags?: string;
}
export declare class KalturaPermissionItem extends KalturaObjectBase {
    readonly id: number;
    readonly type: KalturaPermissionItemType;
    readonly partnerId: number;
    tags: string;
    readonly createdAt: Date;
    readonly updatedAt: Date;
    constructor(data?: KalturaPermissionItemArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

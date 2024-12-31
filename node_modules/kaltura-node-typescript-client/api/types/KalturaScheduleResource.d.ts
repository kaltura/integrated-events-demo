import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaScheduleResourceStatus } from './KalturaScheduleResourceStatus';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';
export interface KalturaScheduleResourceArgs extends KalturaObjectBaseArgs {
    parentId?: number;
    name?: string;
    systemName?: string;
    description?: string;
    tags?: string;
}
export declare class KalturaScheduleResource extends KalturaObjectBase {
    readonly id: number;
    parentId: number;
    readonly partnerId: number;
    name: string;
    systemName: string;
    description: string;
    readonly status: KalturaScheduleResourceStatus;
    tags: string;
    readonly createdAt: Date;
    readonly updatedAt: Date;
    constructor(data?: KalturaScheduleResourceArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaScheduledTaskProfileStatus } from './KalturaScheduledTaskProfileStatus';
import { KalturaObjectFilterEngineType } from './KalturaObjectFilterEngineType';
import { KalturaFilter } from './KalturaFilter';
import { KalturaObjectTask } from './KalturaObjectTask';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';
export interface KalturaScheduledTaskProfileArgs extends KalturaObjectBaseArgs {
    name?: string;
    systemName?: string;
    description?: string;
    status?: KalturaScheduledTaskProfileStatus;
    objectFilterEngineType?: KalturaObjectFilterEngineType;
    objectFilter?: KalturaFilter;
    objectTasks?: KalturaObjectTask[];
    lastExecutionStartedAt?: Date;
    maxTotalCountAllowed?: number;
}
export declare class KalturaScheduledTaskProfile extends KalturaObjectBase {
    readonly id: number;
    readonly partnerId: number;
    name: string;
    systemName: string;
    description: string;
    status: KalturaScheduledTaskProfileStatus;
    objectFilterEngineType: KalturaObjectFilterEngineType;
    objectFilter: KalturaFilter;
    objectTasks: KalturaObjectTask[];
    readonly createdAt: Date;
    readonly updatedAt: Date;
    lastExecutionStartedAt: Date;
    maxTotalCountAllowed: number;
    constructor(data?: KalturaScheduledTaskProfileArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

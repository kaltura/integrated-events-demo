import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaControlPanelCommandType } from './KalturaControlPanelCommandType';
import { KalturaControlPanelCommandTargetType } from './KalturaControlPanelCommandTargetType';
import { KalturaControlPanelCommandStatus } from './KalturaControlPanelCommandStatus';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';
export interface KalturaControlPanelCommandArgs extends KalturaObjectBaseArgs {
    createdBy?: string;
    updatedBy?: string;
    createdById?: number;
    schedulerId?: number;
    workerId?: number;
    workerConfiguredId?: number;
    workerName?: number;
    batchIndex?: number;
    type?: KalturaControlPanelCommandType;
    targetType?: KalturaControlPanelCommandTargetType;
    status?: KalturaControlPanelCommandStatus;
    cause?: string;
    description?: string;
    errorDescription?: string;
}
export declare class KalturaControlPanelCommand extends KalturaObjectBase {
    readonly id: number;
    readonly createdAt: Date;
    createdBy: string;
    readonly updatedAt: Date;
    updatedBy: string;
    createdById: number;
    schedulerId: number;
    workerId: number;
    workerConfiguredId: number;
    workerName: number;
    batchIndex: number;
    type: KalturaControlPanelCommandType;
    targetType: KalturaControlPanelCommandTargetType;
    status: KalturaControlPanelCommandStatus;
    cause: string;
    description: string;
    errorDescription: string;
    constructor(data?: KalturaControlPanelCommandArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

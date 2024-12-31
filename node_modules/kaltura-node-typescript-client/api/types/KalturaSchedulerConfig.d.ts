import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';
export interface KalturaSchedulerConfigArgs extends KalturaObjectBaseArgs {
    createdBy?: string;
    updatedBy?: string;
    commandId?: string;
    commandStatus?: string;
    schedulerId?: number;
    schedulerConfiguredId?: number;
    schedulerName?: string;
    workerId?: number;
    workerConfiguredId?: number;
    workerName?: string;
    variable?: string;
    variablePart?: string;
    value?: string;
}
export declare class KalturaSchedulerConfig extends KalturaObjectBase {
    readonly id: number;
    createdBy: string;
    updatedBy: string;
    commandId: string;
    commandStatus: string;
    schedulerId: number;
    schedulerConfiguredId: number;
    schedulerName: string;
    workerId: number;
    workerConfiguredId: number;
    workerName: string;
    variable: string;
    variablePart: string;
    value: string;
    constructor(data?: KalturaSchedulerConfigArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaBatchJobType } from './KalturaBatchJobType';
import { KalturaSchedulerStatusType } from './KalturaSchedulerStatusType';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';
export interface KalturaSchedulerStatusArgs extends KalturaObjectBaseArgs {
    schedulerConfiguredId?: number;
    workerConfiguredId?: number;
    workerType?: KalturaBatchJobType;
    type?: KalturaSchedulerStatusType;
    value?: number;
}
export declare class KalturaSchedulerStatus extends KalturaObjectBase {
    readonly id: number;
    schedulerConfiguredId: number;
    workerConfiguredId: number;
    workerType: KalturaBatchJobType;
    type: KalturaSchedulerStatusType;
    value: number;
    readonly schedulerId: number;
    readonly workerId: number;
    constructor(data?: KalturaSchedulerStatusArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

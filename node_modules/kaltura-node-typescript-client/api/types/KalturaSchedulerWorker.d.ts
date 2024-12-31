import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaBatchJobType } from './KalturaBatchJobType';
import { KalturaSchedulerStatus } from './KalturaSchedulerStatus';
import { KalturaSchedulerConfig } from './KalturaSchedulerConfig';
import { KalturaBatchJob } from './KalturaBatchJob';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';
export interface KalturaSchedulerWorkerArgs extends KalturaObjectBaseArgs {
    configuredId?: number;
    schedulerId?: number;
    schedulerConfiguredId?: number;
    type?: KalturaBatchJobType;
    typeName?: string;
    name?: string;
    statuses?: KalturaSchedulerStatus[];
    configs?: KalturaSchedulerConfig[];
    lockedJobs?: KalturaBatchJob[];
    avgWait?: number;
    avgWork?: number;
    lastStatus?: number;
    lastStatusStr?: string;
}
export declare class KalturaSchedulerWorker extends KalturaObjectBase {
    readonly id: number;
    configuredId: number;
    schedulerId: number;
    schedulerConfiguredId: number;
    type: KalturaBatchJobType;
    typeName: string;
    name: string;
    statuses: KalturaSchedulerStatus[];
    configs: KalturaSchedulerConfig[];
    lockedJobs: KalturaBatchJob[];
    avgWait: number;
    avgWork: number;
    lastStatus: number;
    lastStatusStr: string;
    constructor(data?: KalturaSchedulerWorkerArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

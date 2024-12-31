import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaSchedulerStatus } from './KalturaSchedulerStatus';
import { KalturaSchedulerConfig } from './KalturaSchedulerConfig';
import { KalturaSchedulerWorker } from './KalturaSchedulerWorker';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';
export interface KalturaSchedulerArgs extends KalturaObjectBaseArgs {
    configuredId?: number;
    name?: string;
    host?: string;
}
export declare class KalturaScheduler extends KalturaObjectBase {
    readonly id: number;
    configuredId: number;
    name: string;
    host: string;
    readonly statuses: KalturaSchedulerStatus[];
    readonly configs: KalturaSchedulerConfig[];
    readonly workers: KalturaSchedulerWorker[];
    readonly createdAt: Date;
    readonly lastStatus: number;
    readonly lastStatusStr: string;
    constructor(data?: KalturaSchedulerArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

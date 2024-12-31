import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaSchedulerWorker } from './KalturaSchedulerWorker';
import { KalturaListResponse, KalturaListResponseArgs } from './KalturaListResponse';
export interface KalturaSchedulerWorkerListResponseArgs extends KalturaListResponseArgs {
}
export declare class KalturaSchedulerWorkerListResponse extends KalturaListResponse {
    readonly objects: KalturaSchedulerWorker[];
    constructor(data?: KalturaSchedulerWorkerListResponseArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaScheduler } from './KalturaScheduler';
import { KalturaListResponse, KalturaListResponseArgs } from './KalturaListResponse';
export interface KalturaSchedulerListResponseArgs extends KalturaListResponseArgs {
}
export declare class KalturaSchedulerListResponse extends KalturaListResponse {
    readonly objects: KalturaScheduler[];
    constructor(data?: KalturaSchedulerListResponseArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

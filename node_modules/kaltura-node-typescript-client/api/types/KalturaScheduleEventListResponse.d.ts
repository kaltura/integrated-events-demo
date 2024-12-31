import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaScheduleEvent } from './KalturaScheduleEvent';
import { KalturaListResponse, KalturaListResponseArgs } from './KalturaListResponse';
export interface KalturaScheduleEventListResponseArgs extends KalturaListResponseArgs {
}
export declare class KalturaScheduleEventListResponse extends KalturaListResponse {
    readonly objects: KalturaScheduleEvent[];
    constructor(data?: KalturaScheduleEventListResponseArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaScheduleResource } from './KalturaScheduleResource';
import { KalturaListResponse, KalturaListResponseArgs } from './KalturaListResponse';
export interface KalturaScheduleResourceListResponseArgs extends KalturaListResponseArgs {
}
export declare class KalturaScheduleResourceListResponse extends KalturaListResponse {
    readonly objects: KalturaScheduleResource[];
    constructor(data?: KalturaScheduleResourceListResponseArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

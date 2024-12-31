import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaScheduleEventResource } from './KalturaScheduleEventResource';
import { KalturaListResponse, KalturaListResponseArgs } from './KalturaListResponse';
export interface KalturaScheduleEventResourceListResponseArgs extends KalturaListResponseArgs {
}
export declare class KalturaScheduleEventResourceListResponse extends KalturaListResponse {
    readonly objects: KalturaScheduleEventResource[];
    constructor(data?: KalturaScheduleEventResourceListResponseArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

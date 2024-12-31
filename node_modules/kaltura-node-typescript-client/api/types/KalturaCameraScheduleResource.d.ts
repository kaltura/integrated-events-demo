import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaScheduleResource, KalturaScheduleResourceArgs } from './KalturaScheduleResource';
export interface KalturaCameraScheduleResourceArgs extends KalturaScheduleResourceArgs {
    streamUrl?: string;
}
export declare class KalturaCameraScheduleResource extends KalturaScheduleResource {
    streamUrl: string;
    constructor(data?: KalturaCameraScheduleResourceArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

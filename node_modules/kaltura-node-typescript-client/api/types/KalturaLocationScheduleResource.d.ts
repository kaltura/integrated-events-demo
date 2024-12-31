import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaScheduleResource, KalturaScheduleResourceArgs } from './KalturaScheduleResource';
export interface KalturaLocationScheduleResourceArgs extends KalturaScheduleResourceArgs {
}
export declare class KalturaLocationScheduleResource extends KalturaScheduleResource {
    constructor(data?: KalturaLocationScheduleResourceArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

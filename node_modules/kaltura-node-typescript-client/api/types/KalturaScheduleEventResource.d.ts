import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';
export interface KalturaScheduleEventResourceArgs extends KalturaObjectBaseArgs {
    eventId?: number;
    resourceId?: number;
}
export declare class KalturaScheduleEventResource extends KalturaObjectBase {
    eventId: number;
    resourceId: number;
    readonly partnerId: number;
    readonly createdAt: Date;
    readonly updatedAt: Date;
    constructor(data?: KalturaScheduleEventResourceArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

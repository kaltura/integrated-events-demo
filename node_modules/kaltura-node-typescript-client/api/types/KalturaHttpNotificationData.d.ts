import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';
export interface KalturaHttpNotificationDataArgs extends KalturaObjectBaseArgs {
}
export declare class KalturaHttpNotificationData extends KalturaObjectBase {
    constructor(data?: KalturaHttpNotificationDataArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

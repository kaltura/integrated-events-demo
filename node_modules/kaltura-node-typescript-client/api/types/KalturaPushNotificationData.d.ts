import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';
export interface KalturaPushNotificationDataArgs extends KalturaObjectBaseArgs {
}
export declare class KalturaPushNotificationData extends KalturaObjectBase {
    readonly queueName: string;
    readonly queueKey: string;
    readonly url: string;
    constructor(data?: KalturaPushNotificationDataArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaPushEventNotificationParameter } from './KalturaPushEventNotificationParameter';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';
export interface KalturaPushNotificationParamsArgs extends KalturaObjectBaseArgs {
    userParams?: KalturaPushEventNotificationParameter[];
}
export declare class KalturaPushNotificationParams extends KalturaObjectBase {
    userParams: KalturaPushEventNotificationParameter[];
    constructor(data?: KalturaPushNotificationParamsArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

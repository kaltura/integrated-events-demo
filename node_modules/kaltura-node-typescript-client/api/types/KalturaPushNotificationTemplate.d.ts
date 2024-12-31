import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaPushEventNotificationParameter } from './KalturaPushEventNotificationParameter';
import { KalturaResponseType } from './KalturaResponseType';
import { KalturaEventNotificationTemplate, KalturaEventNotificationTemplateArgs } from './KalturaEventNotificationTemplate';
export interface KalturaPushNotificationTemplateArgs extends KalturaEventNotificationTemplateArgs {
    queueNameParameters?: KalturaPushEventNotificationParameter[];
    queueKeyParameters?: KalturaPushEventNotificationParameter[];
    apiObjectType?: string;
    objectFormat?: KalturaResponseType;
    responseProfileId?: number;
}
export declare class KalturaPushNotificationTemplate extends KalturaEventNotificationTemplate {
    queueNameParameters: KalturaPushEventNotificationParameter[];
    queueKeyParameters: KalturaPushEventNotificationParameter[];
    apiObjectType: string;
    objectFormat: KalturaResponseType;
    responseProfileId: number;
    constructor(data?: KalturaPushNotificationTemplateArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

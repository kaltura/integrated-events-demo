import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaEventNotificationEventObjectType } from './KalturaEventNotificationEventObjectType';
import { KalturaEventNotificationEventType } from './KalturaEventNotificationEventType';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';
export interface KalturaHttpNotificationArgs extends KalturaObjectBaseArgs {
    object?: KalturaObjectBase;
    eventObjectType?: KalturaEventNotificationEventObjectType;
    eventNotificationJobId?: number;
    templateId?: number;
    templateName?: string;
    templateSystemName?: string;
    eventType?: KalturaEventNotificationEventType;
}
export declare class KalturaHttpNotification extends KalturaObjectBase {
    object: KalturaObjectBase;
    eventObjectType: KalturaEventNotificationEventObjectType;
    eventNotificationJobId: number;
    templateId: number;
    templateName: string;
    templateSystemName: string;
    eventType: KalturaEventNotificationEventType;
    constructor(data?: KalturaHttpNotificationArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

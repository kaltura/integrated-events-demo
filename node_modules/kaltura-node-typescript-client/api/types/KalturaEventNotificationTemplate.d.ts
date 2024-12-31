import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaEventNotificationTemplateType } from './KalturaEventNotificationTemplateType';
import { KalturaEventNotificationTemplateStatus } from './KalturaEventNotificationTemplateStatus';
import { KalturaEventNotificationEventType } from './KalturaEventNotificationEventType';
import { KalturaEventNotificationEventObjectType } from './KalturaEventNotificationEventObjectType';
import { KalturaCondition } from './KalturaCondition';
import { KalturaEventNotificationParameter } from './KalturaEventNotificationParameter';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';
export interface KalturaEventNotificationTemplateArgs extends KalturaObjectBaseArgs {
    name?: string;
    systemName?: string;
    description?: string;
    type?: KalturaEventNotificationTemplateType;
    manualDispatchEnabled?: boolean;
    automaticDispatchEnabled?: boolean;
    eventType?: KalturaEventNotificationEventType;
    eventObjectType?: KalturaEventNotificationEventObjectType;
    eventConditions?: KalturaCondition[];
    contentParameters?: KalturaEventNotificationParameter[];
    userParameters?: KalturaEventNotificationParameter[];
}
export declare class KalturaEventNotificationTemplate extends KalturaObjectBase {
    readonly id: number;
    readonly partnerId: number;
    name: string;
    systemName: string;
    description: string;
    type: KalturaEventNotificationTemplateType;
    readonly status: KalturaEventNotificationTemplateStatus;
    readonly createdAt: Date;
    readonly updatedAt: Date;
    manualDispatchEnabled: boolean;
    automaticDispatchEnabled: boolean;
    eventType: KalturaEventNotificationEventType;
    eventObjectType: KalturaEventNotificationEventObjectType;
    eventConditions: KalturaCondition[];
    contentParameters: KalturaEventNotificationParameter[];
    userParameters: KalturaEventNotificationParameter[];
    constructor(data?: KalturaEventNotificationTemplateArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

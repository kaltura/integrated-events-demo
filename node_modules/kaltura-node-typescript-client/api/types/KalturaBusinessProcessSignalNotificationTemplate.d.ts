import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaBusinessProcessNotificationTemplate, KalturaBusinessProcessNotificationTemplateArgs } from './KalturaBusinessProcessNotificationTemplate';
export interface KalturaBusinessProcessSignalNotificationTemplateArgs extends KalturaBusinessProcessNotificationTemplateArgs {
    message?: string;
    eventId?: string;
}
export declare class KalturaBusinessProcessSignalNotificationTemplate extends KalturaBusinessProcessNotificationTemplate {
    message: string;
    eventId: string;
    constructor(data?: KalturaBusinessProcessSignalNotificationTemplateArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

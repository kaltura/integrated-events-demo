import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaBusinessProcessNotificationTemplate, KalturaBusinessProcessNotificationTemplateArgs } from './KalturaBusinessProcessNotificationTemplate';
export interface KalturaBusinessProcessAbortNotificationTemplateArgs extends KalturaBusinessProcessNotificationTemplateArgs {
}
export declare class KalturaBusinessProcessAbortNotificationTemplate extends KalturaBusinessProcessNotificationTemplate {
    constructor(data?: KalturaBusinessProcessAbortNotificationTemplateArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

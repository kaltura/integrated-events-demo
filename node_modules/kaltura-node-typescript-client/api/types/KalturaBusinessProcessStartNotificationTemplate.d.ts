import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaBusinessProcessNotificationTemplate, KalturaBusinessProcessNotificationTemplateArgs } from './KalturaBusinessProcessNotificationTemplate';
export interface KalturaBusinessProcessStartNotificationTemplateArgs extends KalturaBusinessProcessNotificationTemplateArgs {
    abortOnDeletion?: boolean;
}
export declare class KalturaBusinessProcessStartNotificationTemplate extends KalturaBusinessProcessNotificationTemplate {
    abortOnDeletion: boolean;
    constructor(data?: KalturaBusinessProcessStartNotificationTemplateArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

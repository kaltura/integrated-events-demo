import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaEventNotificationTemplate, KalturaEventNotificationTemplateArgs } from './KalturaEventNotificationTemplate';
export interface KalturaBusinessProcessNotificationTemplateArgs extends KalturaEventNotificationTemplateArgs {
    serverId?: number;
    processId?: string;
    mainObjectCode?: string;
}
export declare class KalturaBusinessProcessNotificationTemplate extends KalturaEventNotificationTemplate {
    serverId: number;
    processId: string;
    mainObjectCode: string;
    constructor(data?: KalturaBusinessProcessNotificationTemplateArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaEmailNotificationFormat } from './KalturaEmailNotificationFormat';
import { KalturaEmailNotificationRecipientProvider } from './KalturaEmailNotificationRecipientProvider';
import { KalturaEmailNotificationTemplatePriority } from './KalturaEmailNotificationTemplatePriority';
import { KalturaKeyValue } from './KalturaKeyValue';
import { KalturaEventNotificationTemplate, KalturaEventNotificationTemplateArgs } from './KalturaEventNotificationTemplate';
export interface KalturaEmailNotificationTemplateArgs extends KalturaEventNotificationTemplateArgs {
    format?: KalturaEmailNotificationFormat;
    subject?: string;
    body?: string;
    fromEmail?: string;
    fromName?: string;
    to?: KalturaEmailNotificationRecipientProvider;
    cc?: KalturaEmailNotificationRecipientProvider;
    bcc?: KalturaEmailNotificationRecipientProvider;
    replyTo?: KalturaEmailNotificationRecipientProvider;
    priority?: KalturaEmailNotificationTemplatePriority;
    confirmReadingTo?: string;
    hostname?: string;
    messageID?: string;
    customHeaders?: KalturaKeyValue[];
}
export declare class KalturaEmailNotificationTemplate extends KalturaEventNotificationTemplate {
    format: KalturaEmailNotificationFormat;
    subject: string;
    body: string;
    fromEmail: string;
    fromName: string;
    to: KalturaEmailNotificationRecipientProvider;
    cc: KalturaEmailNotificationRecipientProvider;
    bcc: KalturaEmailNotificationRecipientProvider;
    replyTo: KalturaEmailNotificationRecipientProvider;
    priority: KalturaEmailNotificationTemplatePriority;
    confirmReadingTo: string;
    hostname: string;
    messageID: string;
    customHeaders: KalturaKeyValue[];
    constructor(data?: KalturaEmailNotificationTemplateArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaEmailNotificationRecipientJobData } from './KalturaEmailNotificationRecipientJobData';
import { KalturaEmailNotificationTemplatePriority } from './KalturaEmailNotificationTemplatePriority';
import { KalturaKeyValue } from './KalturaKeyValue';
import { KalturaEventNotificationDispatchJobData, KalturaEventNotificationDispatchJobDataArgs } from './KalturaEventNotificationDispatchJobData';
export interface KalturaEmailNotificationDispatchJobDataArgs extends KalturaEventNotificationDispatchJobDataArgs {
    fromEmail?: string;
    fromName?: string;
    to?: KalturaEmailNotificationRecipientJobData;
    cc?: KalturaEmailNotificationRecipientJobData;
    bcc?: KalturaEmailNotificationRecipientJobData;
    replyTo?: KalturaEmailNotificationRecipientJobData;
    priority?: KalturaEmailNotificationTemplatePriority;
    confirmReadingTo?: string;
    hostname?: string;
    messageID?: string;
    customHeaders?: KalturaKeyValue[];
}
export declare class KalturaEmailNotificationDispatchJobData extends KalturaEventNotificationDispatchJobData {
    fromEmail: string;
    fromName: string;
    to: KalturaEmailNotificationRecipientJobData;
    cc: KalturaEmailNotificationRecipientJobData;
    bcc: KalturaEmailNotificationRecipientJobData;
    replyTo: KalturaEmailNotificationRecipientJobData;
    priority: KalturaEmailNotificationTemplatePriority;
    confirmReadingTo: string;
    hostname: string;
    messageID: string;
    customHeaders: KalturaKeyValue[];
    constructor(data?: KalturaEmailNotificationDispatchJobDataArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

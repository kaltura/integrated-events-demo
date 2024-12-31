import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaKeyValue } from './KalturaKeyValue';
import { KalturaEmailNotificationRecipientJobData, KalturaEmailNotificationRecipientJobDataArgs } from './KalturaEmailNotificationRecipientJobData';
export interface KalturaEmailNotificationStaticRecipientJobDataArgs extends KalturaEmailNotificationRecipientJobDataArgs {
    emailRecipients?: KalturaKeyValue[];
}
export declare class KalturaEmailNotificationStaticRecipientJobData extends KalturaEmailNotificationRecipientJobData {
    emailRecipients: KalturaKeyValue[];
    constructor(data?: KalturaEmailNotificationStaticRecipientJobDataArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

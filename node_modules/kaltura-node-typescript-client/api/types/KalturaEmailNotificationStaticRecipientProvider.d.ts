import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaEmailNotificationRecipient } from './KalturaEmailNotificationRecipient';
import { KalturaEmailNotificationRecipientProvider, KalturaEmailNotificationRecipientProviderArgs } from './KalturaEmailNotificationRecipientProvider';
export interface KalturaEmailNotificationStaticRecipientProviderArgs extends KalturaEmailNotificationRecipientProviderArgs {
    emailRecipients?: KalturaEmailNotificationRecipient[];
}
export declare class KalturaEmailNotificationStaticRecipientProvider extends KalturaEmailNotificationRecipientProvider {
    emailRecipients: KalturaEmailNotificationRecipient[];
    constructor(data?: KalturaEmailNotificationStaticRecipientProviderArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

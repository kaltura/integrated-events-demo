import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaEmailNotificationRecipientProviderType } from './KalturaEmailNotificationRecipientProviderType';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';
export interface KalturaEmailNotificationRecipientJobDataArgs extends KalturaObjectBaseArgs {
}
export declare class KalturaEmailNotificationRecipientJobData extends KalturaObjectBase {
    readonly providerType: KalturaEmailNotificationRecipientProviderType;
    constructor(data?: KalturaEmailNotificationRecipientJobDataArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

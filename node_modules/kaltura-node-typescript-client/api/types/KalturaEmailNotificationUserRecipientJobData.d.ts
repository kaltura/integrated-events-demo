import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaUserFilter } from './KalturaUserFilter';
import { KalturaEmailNotificationRecipientJobData, KalturaEmailNotificationRecipientJobDataArgs } from './KalturaEmailNotificationRecipientJobData';
export interface KalturaEmailNotificationUserRecipientJobDataArgs extends KalturaEmailNotificationRecipientJobDataArgs {
    filter?: KalturaUserFilter;
}
export declare class KalturaEmailNotificationUserRecipientJobData extends KalturaEmailNotificationRecipientJobData {
    filter: KalturaUserFilter;
    constructor(data?: KalturaEmailNotificationUserRecipientJobDataArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

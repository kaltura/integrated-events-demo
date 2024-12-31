import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaCategoryUserFilter } from './KalturaCategoryUserFilter';
import { KalturaEmailNotificationRecipientJobData, KalturaEmailNotificationRecipientJobDataArgs } from './KalturaEmailNotificationRecipientJobData';
export interface KalturaEmailNotificationCategoryRecipientJobDataArgs extends KalturaEmailNotificationRecipientJobDataArgs {
    categoryUserFilter?: KalturaCategoryUserFilter;
}
export declare class KalturaEmailNotificationCategoryRecipientJobData extends KalturaEmailNotificationRecipientJobData {
    categoryUserFilter: KalturaCategoryUserFilter;
    constructor(data?: KalturaEmailNotificationCategoryRecipientJobDataArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

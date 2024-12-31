import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaStringValue } from './KalturaStringValue';
import { KalturaCategoryUserProviderFilter } from './KalturaCategoryUserProviderFilter';
import { KalturaEmailNotificationRecipientProvider, KalturaEmailNotificationRecipientProviderArgs } from './KalturaEmailNotificationRecipientProvider';
export interface KalturaEmailNotificationCategoryRecipientProviderArgs extends KalturaEmailNotificationRecipientProviderArgs {
    categoryId?: KalturaStringValue;
    categoryIds?: KalturaStringValue;
    categoryUserFilter?: KalturaCategoryUserProviderFilter;
}
export declare class KalturaEmailNotificationCategoryRecipientProvider extends KalturaEmailNotificationRecipientProvider {
    categoryId: KalturaStringValue;
    categoryIds: KalturaStringValue;
    categoryUserFilter: KalturaCategoryUserProviderFilter;
    constructor(data?: KalturaEmailNotificationCategoryRecipientProviderArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

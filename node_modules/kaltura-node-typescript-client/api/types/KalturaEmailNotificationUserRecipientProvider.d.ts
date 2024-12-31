import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaUserFilter } from './KalturaUserFilter';
import { KalturaEmailNotificationRecipientProvider, KalturaEmailNotificationRecipientProviderArgs } from './KalturaEmailNotificationRecipientProvider';
export interface KalturaEmailNotificationUserRecipientProviderArgs extends KalturaEmailNotificationRecipientProviderArgs {
    filter?: KalturaUserFilter;
}
export declare class KalturaEmailNotificationUserRecipientProvider extends KalturaEmailNotificationRecipientProvider {
    filter: KalturaUserFilter;
    constructor(data?: KalturaEmailNotificationUserRecipientProviderArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

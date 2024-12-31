import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaEventNotificationTemplateFilter, KalturaEventNotificationTemplateFilterArgs } from './KalturaEventNotificationTemplateFilter';
export interface KalturaPushNotificationTemplateBaseFilterArgs extends KalturaEventNotificationTemplateFilterArgs {
}
export declare class KalturaPushNotificationTemplateBaseFilter extends KalturaEventNotificationTemplateFilter {
    constructor(data?: KalturaPushNotificationTemplateBaseFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

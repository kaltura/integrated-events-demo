import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaPushNotificationTemplateBaseFilter, KalturaPushNotificationTemplateBaseFilterArgs } from './KalturaPushNotificationTemplateBaseFilter';
export interface KalturaPushNotificationTemplateFilterArgs extends KalturaPushNotificationTemplateBaseFilterArgs {
}
export declare class KalturaPushNotificationTemplateFilter extends KalturaPushNotificationTemplateBaseFilter {
    constructor(data?: KalturaPushNotificationTemplateFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

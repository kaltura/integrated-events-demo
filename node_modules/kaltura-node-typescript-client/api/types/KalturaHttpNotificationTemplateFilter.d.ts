import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaHttpNotificationTemplateBaseFilter, KalturaHttpNotificationTemplateBaseFilterArgs } from './KalturaHttpNotificationTemplateBaseFilter';
export interface KalturaHttpNotificationTemplateFilterArgs extends KalturaHttpNotificationTemplateBaseFilterArgs {
}
export declare class KalturaHttpNotificationTemplateFilter extends KalturaHttpNotificationTemplateBaseFilter {
    constructor(data?: KalturaHttpNotificationTemplateFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

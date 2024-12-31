import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaEventNotificationTemplateFilter, KalturaEventNotificationTemplateFilterArgs } from './KalturaEventNotificationTemplateFilter';
export interface KalturaHttpNotificationTemplateBaseFilterArgs extends KalturaEventNotificationTemplateFilterArgs {
}
export declare class KalturaHttpNotificationTemplateBaseFilter extends KalturaEventNotificationTemplateFilter {
    constructor(data?: KalturaHttpNotificationTemplateBaseFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaEmailNotificationTemplateBaseFilter, KalturaEmailNotificationTemplateBaseFilterArgs } from './KalturaEmailNotificationTemplateBaseFilter';
export interface KalturaEmailNotificationTemplateFilterArgs extends KalturaEmailNotificationTemplateBaseFilterArgs {
}
export declare class KalturaEmailNotificationTemplateFilter extends KalturaEmailNotificationTemplateBaseFilter {
    constructor(data?: KalturaEmailNotificationTemplateFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

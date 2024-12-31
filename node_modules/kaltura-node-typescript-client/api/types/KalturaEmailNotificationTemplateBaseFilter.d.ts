import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaEventNotificationTemplateFilter, KalturaEventNotificationTemplateFilterArgs } from './KalturaEventNotificationTemplateFilter';
export interface KalturaEmailNotificationTemplateBaseFilterArgs extends KalturaEventNotificationTemplateFilterArgs {
}
export declare class KalturaEmailNotificationTemplateBaseFilter extends KalturaEventNotificationTemplateFilter {
    constructor(data?: KalturaEmailNotificationTemplateBaseFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

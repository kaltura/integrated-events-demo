import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaEventNotificationTemplateBaseFilter, KalturaEventNotificationTemplateBaseFilterArgs } from './KalturaEventNotificationTemplateBaseFilter';
export interface KalturaEventNotificationTemplateFilterArgs extends KalturaEventNotificationTemplateBaseFilterArgs {
}
export declare class KalturaEventNotificationTemplateFilter extends KalturaEventNotificationTemplateBaseFilter {
    constructor(data?: KalturaEventNotificationTemplateFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

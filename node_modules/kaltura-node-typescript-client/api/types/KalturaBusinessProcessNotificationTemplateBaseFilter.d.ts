import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaEventNotificationTemplateFilter, KalturaEventNotificationTemplateFilterArgs } from './KalturaEventNotificationTemplateFilter';
export interface KalturaBusinessProcessNotificationTemplateBaseFilterArgs extends KalturaEventNotificationTemplateFilterArgs {
}
export declare class KalturaBusinessProcessNotificationTemplateBaseFilter extends KalturaEventNotificationTemplateFilter {
    constructor(data?: KalturaBusinessProcessNotificationTemplateBaseFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

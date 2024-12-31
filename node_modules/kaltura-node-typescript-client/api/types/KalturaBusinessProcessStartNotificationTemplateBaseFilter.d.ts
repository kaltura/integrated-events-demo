import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaBusinessProcessNotificationTemplateFilter, KalturaBusinessProcessNotificationTemplateFilterArgs } from './KalturaBusinessProcessNotificationTemplateFilter';
export interface KalturaBusinessProcessStartNotificationTemplateBaseFilterArgs extends KalturaBusinessProcessNotificationTemplateFilterArgs {
}
export declare class KalturaBusinessProcessStartNotificationTemplateBaseFilter extends KalturaBusinessProcessNotificationTemplateFilter {
    constructor(data?: KalturaBusinessProcessStartNotificationTemplateBaseFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

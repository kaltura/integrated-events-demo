import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaBusinessProcessStartNotificationTemplateBaseFilter, KalturaBusinessProcessStartNotificationTemplateBaseFilterArgs } from './KalturaBusinessProcessStartNotificationTemplateBaseFilter';
export interface KalturaBusinessProcessStartNotificationTemplateFilterArgs extends KalturaBusinessProcessStartNotificationTemplateBaseFilterArgs {
}
export declare class KalturaBusinessProcessStartNotificationTemplateFilter extends KalturaBusinessProcessStartNotificationTemplateBaseFilter {
    constructor(data?: KalturaBusinessProcessStartNotificationTemplateFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

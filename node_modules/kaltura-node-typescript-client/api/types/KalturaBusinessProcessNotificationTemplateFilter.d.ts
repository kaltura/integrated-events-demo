import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaBusinessProcessNotificationTemplateBaseFilter, KalturaBusinessProcessNotificationTemplateBaseFilterArgs } from './KalturaBusinessProcessNotificationTemplateBaseFilter';
export interface KalturaBusinessProcessNotificationTemplateFilterArgs extends KalturaBusinessProcessNotificationTemplateBaseFilterArgs {
}
export declare class KalturaBusinessProcessNotificationTemplateFilter extends KalturaBusinessProcessNotificationTemplateBaseFilter {
    constructor(data?: KalturaBusinessProcessNotificationTemplateFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

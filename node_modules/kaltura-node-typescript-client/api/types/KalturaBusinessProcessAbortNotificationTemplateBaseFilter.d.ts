import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaBusinessProcessNotificationTemplateFilter, KalturaBusinessProcessNotificationTemplateFilterArgs } from './KalturaBusinessProcessNotificationTemplateFilter';
export interface KalturaBusinessProcessAbortNotificationTemplateBaseFilterArgs extends KalturaBusinessProcessNotificationTemplateFilterArgs {
}
export declare class KalturaBusinessProcessAbortNotificationTemplateBaseFilter extends KalturaBusinessProcessNotificationTemplateFilter {
    constructor(data?: KalturaBusinessProcessAbortNotificationTemplateBaseFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

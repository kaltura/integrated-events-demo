import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaBusinessProcessAbortNotificationTemplateBaseFilter, KalturaBusinessProcessAbortNotificationTemplateBaseFilterArgs } from './KalturaBusinessProcessAbortNotificationTemplateBaseFilter';
export interface KalturaBusinessProcessAbortNotificationTemplateFilterArgs extends KalturaBusinessProcessAbortNotificationTemplateBaseFilterArgs {
}
export declare class KalturaBusinessProcessAbortNotificationTemplateFilter extends KalturaBusinessProcessAbortNotificationTemplateBaseFilter {
    constructor(data?: KalturaBusinessProcessAbortNotificationTemplateFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

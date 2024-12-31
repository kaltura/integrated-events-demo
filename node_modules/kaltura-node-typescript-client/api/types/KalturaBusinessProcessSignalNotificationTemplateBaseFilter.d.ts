import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaBusinessProcessNotificationTemplateFilter, KalturaBusinessProcessNotificationTemplateFilterArgs } from './KalturaBusinessProcessNotificationTemplateFilter';
export interface KalturaBusinessProcessSignalNotificationTemplateBaseFilterArgs extends KalturaBusinessProcessNotificationTemplateFilterArgs {
}
export declare class KalturaBusinessProcessSignalNotificationTemplateBaseFilter extends KalturaBusinessProcessNotificationTemplateFilter {
    constructor(data?: KalturaBusinessProcessSignalNotificationTemplateBaseFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

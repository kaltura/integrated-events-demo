import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaBusinessProcessSignalNotificationTemplateBaseFilter, KalturaBusinessProcessSignalNotificationTemplateBaseFilterArgs } from './KalturaBusinessProcessSignalNotificationTemplateBaseFilter';
export interface KalturaBusinessProcessSignalNotificationTemplateFilterArgs extends KalturaBusinessProcessSignalNotificationTemplateBaseFilterArgs {
}
export declare class KalturaBusinessProcessSignalNotificationTemplateFilter extends KalturaBusinessProcessSignalNotificationTemplateBaseFilter {
    constructor(data?: KalturaBusinessProcessSignalNotificationTemplateFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaIntegrationJobTriggerData, KalturaIntegrationJobTriggerDataArgs } from './KalturaIntegrationJobTriggerData';
export interface KalturaBpmEventNotificationIntegrationJobTriggerDataArgs extends KalturaIntegrationJobTriggerDataArgs {
    templateId?: number;
    businessProcessId?: string;
    caseId?: string;
}
export declare class KalturaBpmEventNotificationIntegrationJobTriggerData extends KalturaIntegrationJobTriggerData {
    templateId: number;
    businessProcessId: string;
    caseId: string;
    constructor(data?: KalturaBpmEventNotificationIntegrationJobTriggerDataArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

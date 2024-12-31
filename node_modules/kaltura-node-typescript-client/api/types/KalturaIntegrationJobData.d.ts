import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaIntegrationProviderType } from './KalturaIntegrationProviderType';
import { KalturaIntegrationJobProviderData } from './KalturaIntegrationJobProviderData';
import { KalturaIntegrationTriggerType } from './KalturaIntegrationTriggerType';
import { KalturaIntegrationJobTriggerData } from './KalturaIntegrationJobTriggerData';
import { KalturaJobData, KalturaJobDataArgs } from './KalturaJobData';
export interface KalturaIntegrationJobDataArgs extends KalturaJobDataArgs {
    providerType?: KalturaIntegrationProviderType;
    providerData?: KalturaIntegrationJobProviderData;
    triggerType?: KalturaIntegrationTriggerType;
    triggerData?: KalturaIntegrationJobTriggerData;
}
export declare class KalturaIntegrationJobData extends KalturaJobData {
    readonly callbackNotificationUrl: string;
    providerType: KalturaIntegrationProviderType;
    providerData: KalturaIntegrationJobProviderData;
    triggerType: KalturaIntegrationTriggerType;
    triggerData: KalturaIntegrationJobTriggerData;
    constructor(data?: KalturaIntegrationJobDataArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

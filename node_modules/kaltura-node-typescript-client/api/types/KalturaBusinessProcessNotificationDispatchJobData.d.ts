import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaBusinessProcessServer } from './KalturaBusinessProcessServer';
import { KalturaEventNotificationDispatchJobData, KalturaEventNotificationDispatchJobDataArgs } from './KalturaEventNotificationDispatchJobData';
export interface KalturaBusinessProcessNotificationDispatchJobDataArgs extends KalturaEventNotificationDispatchJobDataArgs {
    server?: KalturaBusinessProcessServer;
    caseId?: string;
}
export declare class KalturaBusinessProcessNotificationDispatchJobData extends KalturaEventNotificationDispatchJobData {
    server: KalturaBusinessProcessServer;
    caseId: string;
    constructor(data?: KalturaBusinessProcessNotificationDispatchJobDataArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

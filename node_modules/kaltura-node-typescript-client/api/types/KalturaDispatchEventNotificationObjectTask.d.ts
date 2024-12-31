import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaObjectTask, KalturaObjectTaskArgs } from './KalturaObjectTask';
export interface KalturaDispatchEventNotificationObjectTaskArgs extends KalturaObjectTaskArgs {
    eventNotificationTemplateId?: number;
}
export declare class KalturaDispatchEventNotificationObjectTask extends KalturaObjectTask {
    eventNotificationTemplateId: number;
    constructor(data?: KalturaDispatchEventNotificationObjectTaskArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

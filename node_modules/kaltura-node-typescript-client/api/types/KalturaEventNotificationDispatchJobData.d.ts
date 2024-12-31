import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaKeyValue } from './KalturaKeyValue';
import { KalturaJobData, KalturaJobDataArgs } from './KalturaJobData';
export interface KalturaEventNotificationDispatchJobDataArgs extends KalturaJobDataArgs {
    templateId?: number;
    contentParameters?: KalturaKeyValue[];
}
export declare class KalturaEventNotificationDispatchJobData extends KalturaJobData {
    templateId: number;
    contentParameters: KalturaKeyValue[];
    constructor(data?: KalturaEventNotificationDispatchJobDataArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

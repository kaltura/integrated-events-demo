import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaNotificationType } from './KalturaNotificationType';
import { KalturaNotificationStatus } from './KalturaNotificationStatus';
import { KalturaNotificationObjectType } from './KalturaNotificationObjectType';
import { KalturaJobData, KalturaJobDataArgs } from './KalturaJobData';
export interface KalturaNotificationJobDataArgs extends KalturaJobDataArgs {
    userId?: string;
    type?: KalturaNotificationType;
    typeAsString?: string;
    objectId?: string;
    status?: KalturaNotificationStatus;
    data?: string;
    numberOfAttempts?: number;
    notificationResult?: string;
    objType?: KalturaNotificationObjectType;
}
export declare class KalturaNotificationJobData extends KalturaJobData {
    userId: string;
    type: KalturaNotificationType;
    typeAsString: string;
    objectId: string;
    status: KalturaNotificationStatus;
    data: string;
    numberOfAttempts: number;
    notificationResult: string;
    objType: KalturaNotificationObjectType;
    constructor(data?: KalturaNotificationJobDataArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

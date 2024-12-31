import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaHttpNotificationData, KalturaHttpNotificationDataArgs } from './KalturaHttpNotificationData';
export interface KalturaHttpNotificationDataFieldsArgs extends KalturaHttpNotificationDataArgs {
}
export declare class KalturaHttpNotificationDataFields extends KalturaHttpNotificationData {
    constructor(data?: KalturaHttpNotificationDataFieldsArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

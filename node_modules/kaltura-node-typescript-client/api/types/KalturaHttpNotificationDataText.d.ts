import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaStringValue } from './KalturaStringValue';
import { KalturaHttpNotificationData, KalturaHttpNotificationDataArgs } from './KalturaHttpNotificationData';
export interface KalturaHttpNotificationDataTextArgs extends KalturaHttpNotificationDataArgs {
    content?: KalturaStringValue;
}
export declare class KalturaHttpNotificationDataText extends KalturaHttpNotificationData {
    content: KalturaStringValue;
    constructor(data?: KalturaHttpNotificationDataTextArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

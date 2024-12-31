import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaResponseType } from './KalturaResponseType';
import { KalturaKeyValue } from './KalturaKeyValue';
import { KalturaHttpNotificationData, KalturaHttpNotificationDataArgs } from './KalturaHttpNotificationData';
export interface KalturaHttpNotificationObjectDataArgs extends KalturaHttpNotificationDataArgs {
    apiObjectType?: string;
    format?: KalturaResponseType;
    ignoreNull?: boolean;
    code?: string;
    dataStringReplacements?: KalturaKeyValue[];
}
export declare class KalturaHttpNotificationObjectData extends KalturaHttpNotificationData {
    apiObjectType: string;
    format: KalturaResponseType;
    ignoreNull: boolean;
    code: string;
    dataStringReplacements: KalturaKeyValue[];
    constructor(data?: KalturaHttpNotificationObjectDataArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

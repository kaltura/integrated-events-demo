import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaKeyValue } from './KalturaKeyValue';
import { KalturaDeliveryProfile, KalturaDeliveryProfileArgs } from './KalturaDeliveryProfile';
export interface KalturaDeliveryProfileForensicWatermarkArgs extends KalturaDeliveryProfileArgs {
    internalUrl?: KalturaKeyValue[];
    encryptionKey?: string;
    encryptionIv?: string;
    encryptionRegex?: string;
}
export declare class KalturaDeliveryProfileForensicWatermark extends KalturaDeliveryProfile {
    internalUrl: KalturaKeyValue[];
    encryptionKey: string;
    encryptionIv: string;
    encryptionRegex: string;
    constructor(data?: KalturaDeliveryProfileForensicWatermarkArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

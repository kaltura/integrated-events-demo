import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDeliveryProfile, KalturaDeliveryProfileArgs } from './KalturaDeliveryProfile';
export interface KalturaDeliveryProfileAkamaiAppleHttpManifestArgs extends KalturaDeliveryProfileArgs {
    supportClipping?: boolean;
}
export declare class KalturaDeliveryProfileAkamaiAppleHttpManifest extends KalturaDeliveryProfile {
    supportClipping: boolean;
    constructor(data?: KalturaDeliveryProfileAkamaiAppleHttpManifestArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

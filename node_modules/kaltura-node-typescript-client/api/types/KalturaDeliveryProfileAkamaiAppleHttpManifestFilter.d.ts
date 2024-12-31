import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDeliveryProfileAkamaiAppleHttpManifestBaseFilter, KalturaDeliveryProfileAkamaiAppleHttpManifestBaseFilterArgs } from './KalturaDeliveryProfileAkamaiAppleHttpManifestBaseFilter';
export interface KalturaDeliveryProfileAkamaiAppleHttpManifestFilterArgs extends KalturaDeliveryProfileAkamaiAppleHttpManifestBaseFilterArgs {
}
export declare class KalturaDeliveryProfileAkamaiAppleHttpManifestFilter extends KalturaDeliveryProfileAkamaiAppleHttpManifestBaseFilter {
    constructor(data?: KalturaDeliveryProfileAkamaiAppleHttpManifestFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

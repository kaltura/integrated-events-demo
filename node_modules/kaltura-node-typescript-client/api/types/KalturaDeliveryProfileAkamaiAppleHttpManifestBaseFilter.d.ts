import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDeliveryProfileFilter, KalturaDeliveryProfileFilterArgs } from './KalturaDeliveryProfileFilter';
export interface KalturaDeliveryProfileAkamaiAppleHttpManifestBaseFilterArgs extends KalturaDeliveryProfileFilterArgs {
}
export declare class KalturaDeliveryProfileAkamaiAppleHttpManifestBaseFilter extends KalturaDeliveryProfileFilter {
    constructor(data?: KalturaDeliveryProfileAkamaiAppleHttpManifestBaseFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

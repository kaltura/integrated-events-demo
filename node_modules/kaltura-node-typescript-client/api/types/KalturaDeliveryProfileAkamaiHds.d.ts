import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDeliveryProfile, KalturaDeliveryProfileArgs } from './KalturaDeliveryProfile';
export interface KalturaDeliveryProfileAkamaiHdsArgs extends KalturaDeliveryProfileArgs {
    supportClipping?: boolean;
}
export declare class KalturaDeliveryProfileAkamaiHds extends KalturaDeliveryProfile {
    supportClipping: boolean;
    constructor(data?: KalturaDeliveryProfileAkamaiHdsArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

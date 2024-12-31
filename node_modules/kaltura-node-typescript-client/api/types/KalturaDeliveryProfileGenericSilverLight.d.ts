import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDeliveryProfile, KalturaDeliveryProfileArgs } from './KalturaDeliveryProfile';
export interface KalturaDeliveryProfileGenericSilverLightArgs extends KalturaDeliveryProfileArgs {
    pattern?: string;
}
export declare class KalturaDeliveryProfileGenericSilverLight extends KalturaDeliveryProfile {
    pattern: string;
    constructor(data?: KalturaDeliveryProfileGenericSilverLightArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

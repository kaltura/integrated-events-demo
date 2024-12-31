import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDeliveryProfileGenericSilverLightBaseFilter, KalturaDeliveryProfileGenericSilverLightBaseFilterArgs } from './KalturaDeliveryProfileGenericSilverLightBaseFilter';
export interface KalturaDeliveryProfileGenericSilverLightFilterArgs extends KalturaDeliveryProfileGenericSilverLightBaseFilterArgs {
}
export declare class KalturaDeliveryProfileGenericSilverLightFilter extends KalturaDeliveryProfileGenericSilverLightBaseFilter {
    constructor(data?: KalturaDeliveryProfileGenericSilverLightFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

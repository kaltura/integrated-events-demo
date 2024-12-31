import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaNullableBoolean } from './KalturaNullableBoolean';
import { KalturaDeliveryProfileBaseFilter, KalturaDeliveryProfileBaseFilterArgs } from './KalturaDeliveryProfileBaseFilter';
export interface KalturaDeliveryProfileFilterArgs extends KalturaDeliveryProfileBaseFilterArgs {
    isLive?: KalturaNullableBoolean;
}
export declare class KalturaDeliveryProfileFilter extends KalturaDeliveryProfileBaseFilter {
    isLive: KalturaNullableBoolean;
    constructor(data?: KalturaDeliveryProfileFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

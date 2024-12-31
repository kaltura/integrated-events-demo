import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDeliveryProfileGenericRtmpBaseFilter, KalturaDeliveryProfileGenericRtmpBaseFilterArgs } from './KalturaDeliveryProfileGenericRtmpBaseFilter';
export interface KalturaDeliveryProfileGenericRtmpFilterArgs extends KalturaDeliveryProfileGenericRtmpBaseFilterArgs {
}
export declare class KalturaDeliveryProfileGenericRtmpFilter extends KalturaDeliveryProfileGenericRtmpBaseFilter {
    constructor(data?: KalturaDeliveryProfileGenericRtmpFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDeliveryProfileRtmpFilter, KalturaDeliveryProfileRtmpFilterArgs } from './KalturaDeliveryProfileRtmpFilter';
export interface KalturaDeliveryProfileGenericRtmpBaseFilterArgs extends KalturaDeliveryProfileRtmpFilterArgs {
}
export declare class KalturaDeliveryProfileGenericRtmpBaseFilter extends KalturaDeliveryProfileRtmpFilter {
    constructor(data?: KalturaDeliveryProfileGenericRtmpBaseFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

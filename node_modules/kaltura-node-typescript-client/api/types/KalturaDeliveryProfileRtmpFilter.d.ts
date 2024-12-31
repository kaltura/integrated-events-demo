import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDeliveryProfileRtmpBaseFilter, KalturaDeliveryProfileRtmpBaseFilterArgs } from './KalturaDeliveryProfileRtmpBaseFilter';
export interface KalturaDeliveryProfileRtmpFilterArgs extends KalturaDeliveryProfileRtmpBaseFilterArgs {
}
export declare class KalturaDeliveryProfileRtmpFilter extends KalturaDeliveryProfileRtmpBaseFilter {
    constructor(data?: KalturaDeliveryProfileRtmpFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

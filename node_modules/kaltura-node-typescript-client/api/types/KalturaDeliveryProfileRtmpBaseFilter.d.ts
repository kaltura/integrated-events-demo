import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDeliveryProfileFilter, KalturaDeliveryProfileFilterArgs } from './KalturaDeliveryProfileFilter';
export interface KalturaDeliveryProfileRtmpBaseFilterArgs extends KalturaDeliveryProfileFilterArgs {
}
export declare class KalturaDeliveryProfileRtmpBaseFilter extends KalturaDeliveryProfileFilter {
    constructor(data?: KalturaDeliveryProfileRtmpBaseFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

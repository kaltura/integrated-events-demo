import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDeliveryProfileFilter, KalturaDeliveryProfileFilterArgs } from './KalturaDeliveryProfileFilter';
export interface KalturaDeliveryProfileLiveAppleHttpBaseFilterArgs extends KalturaDeliveryProfileFilterArgs {
}
export declare class KalturaDeliveryProfileLiveAppleHttpBaseFilter extends KalturaDeliveryProfileFilter {
    constructor(data?: KalturaDeliveryProfileLiveAppleHttpBaseFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

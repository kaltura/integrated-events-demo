import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDeliveryProfileLiveAppleHttpBaseFilter, KalturaDeliveryProfileLiveAppleHttpBaseFilterArgs } from './KalturaDeliveryProfileLiveAppleHttpBaseFilter';
export interface KalturaDeliveryProfileLiveAppleHttpFilterArgs extends KalturaDeliveryProfileLiveAppleHttpBaseFilterArgs {
}
export declare class KalturaDeliveryProfileLiveAppleHttpFilter extends KalturaDeliveryProfileLiveAppleHttpBaseFilter {
    constructor(data?: KalturaDeliveryProfileLiveAppleHttpFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

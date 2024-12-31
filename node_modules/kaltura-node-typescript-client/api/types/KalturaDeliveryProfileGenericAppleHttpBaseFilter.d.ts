import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDeliveryProfileFilter, KalturaDeliveryProfileFilterArgs } from './KalturaDeliveryProfileFilter';
export interface KalturaDeliveryProfileGenericAppleHttpBaseFilterArgs extends KalturaDeliveryProfileFilterArgs {
}
export declare class KalturaDeliveryProfileGenericAppleHttpBaseFilter extends KalturaDeliveryProfileFilter {
    constructor(data?: KalturaDeliveryProfileGenericAppleHttpBaseFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

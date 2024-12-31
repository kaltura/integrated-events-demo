import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDeliveryProfileFilter, KalturaDeliveryProfileFilterArgs } from './KalturaDeliveryProfileFilter';
export interface KalturaDeliveryProfileGenericHttpBaseFilterArgs extends KalturaDeliveryProfileFilterArgs {
}
export declare class KalturaDeliveryProfileGenericHttpBaseFilter extends KalturaDeliveryProfileFilter {
    constructor(data?: KalturaDeliveryProfileGenericHttpBaseFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

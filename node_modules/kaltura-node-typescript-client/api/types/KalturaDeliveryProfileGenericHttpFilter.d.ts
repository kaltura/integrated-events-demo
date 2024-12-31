import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDeliveryProfileGenericHttpBaseFilter, KalturaDeliveryProfileGenericHttpBaseFilterArgs } from './KalturaDeliveryProfileGenericHttpBaseFilter';
export interface KalturaDeliveryProfileGenericHttpFilterArgs extends KalturaDeliveryProfileGenericHttpBaseFilterArgs {
}
export declare class KalturaDeliveryProfileGenericHttpFilter extends KalturaDeliveryProfileGenericHttpBaseFilter {
    constructor(data?: KalturaDeliveryProfileGenericHttpFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

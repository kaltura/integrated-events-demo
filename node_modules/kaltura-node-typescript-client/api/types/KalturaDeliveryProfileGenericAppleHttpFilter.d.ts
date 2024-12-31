import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDeliveryProfileGenericAppleHttpBaseFilter, KalturaDeliveryProfileGenericAppleHttpBaseFilterArgs } from './KalturaDeliveryProfileGenericAppleHttpBaseFilter';
export interface KalturaDeliveryProfileGenericAppleHttpFilterArgs extends KalturaDeliveryProfileGenericAppleHttpBaseFilterArgs {
}
export declare class KalturaDeliveryProfileGenericAppleHttpFilter extends KalturaDeliveryProfileGenericAppleHttpBaseFilter {
    constructor(data?: KalturaDeliveryProfileGenericAppleHttpFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

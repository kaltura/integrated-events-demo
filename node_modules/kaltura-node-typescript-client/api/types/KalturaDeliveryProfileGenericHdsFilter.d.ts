import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDeliveryProfileGenericHdsBaseFilter, KalturaDeliveryProfileGenericHdsBaseFilterArgs } from './KalturaDeliveryProfileGenericHdsBaseFilter';
export interface KalturaDeliveryProfileGenericHdsFilterArgs extends KalturaDeliveryProfileGenericHdsBaseFilterArgs {
}
export declare class KalturaDeliveryProfileGenericHdsFilter extends KalturaDeliveryProfileGenericHdsBaseFilter {
    constructor(data?: KalturaDeliveryProfileGenericHdsFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}

import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDeliveryServerNodeBaseFilter, KalturaDeliveryServerNodeBaseFilterArgs } from './KalturaDeliveryServerNodeBaseFilter';
export interface KalturaDeliveryServerNodeFilterArgs extends KalturaDeliveryServerNodeBaseFilterArgs {
}
export declare class KalturaDeliveryServerNodeFilter extends KalturaDeliveryServerNodeBaseFilter {
    constructor(data?: KalturaDeliveryServerNodeFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
